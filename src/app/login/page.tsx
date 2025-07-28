function LoginPage() {
  return (
    <div
      className="flex items-center justify-center min-h-screen
     bg-gray-100"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg
               focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg 
              focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-900 
            rounded-lg hover:bg-blue-600 focus:outline-none 
            focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;