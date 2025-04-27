import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`, // API URL from environment variable
        { name, password }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center font-sans">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-10 w-[350px] flex flex-col gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          LOGIN
        </button>
        {message && (
          <motion.p
            className="text-center text-sm text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
