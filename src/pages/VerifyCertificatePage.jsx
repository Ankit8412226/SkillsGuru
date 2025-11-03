import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

const VerifyCertificatePage = () => {
  const query = useQuery();
  const [cid, setCid] = useState(query.get("id") || "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const verify = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/certificates/verify/${id}`);
      setResult(res.data?.data || null);
    } catch (e) {
      setResult(null);
      setError("Certificate not found or invalid");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const id = query.get("id");
    if (id) verify(id);
  }, []);

  return (
    <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen max-w-3xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0E2A46] mb-6">Verify Certificate</h1>
      <div className="p-4 border rounded-xl bg-white">
        <div className="flex gap-2 mb-4">
          <input value={cid} onChange={(e)=>setCid(e.target.value)} placeholder="Enter certificate ID" className="flex-1 border rounded-lg px-3 py-2" />
          <button onClick={()=>verify(cid)} className="px-4 py-2 bg-emerald-500 text-white rounded-lg" disabled={!cid || loading}>{loading ? 'Verifying...' : 'Verify'}</button>
        </div>
        {error && <div className="text-red-600">{error}</div>}
        {result && (
          <div className="mt-4">
            <p className="text-gray-700">This certificate is valid.</p>
            <div className="mt-2 p-3 border rounded-lg">
              <div><span className="font-semibold">Certificate ID:</span> {result.certificateId}</div>
              <div><span className="font-semibold">Student:</span> {result.user?.name}</div>
              <div><span className="font-semibold">Course:</span> {result.course?.title}</div>
              <div><span className="font-semibold">Issued:</span> {new Date(result.issuedAt).toLocaleString()}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificatePage;


