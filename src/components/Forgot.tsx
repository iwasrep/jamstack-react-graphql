export function Forgot() {

  function handleSubmit(e) {
    e.preventDefault();
    alert('You Submit Form Recover your Password!');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
            placeholder="Type your e-mail"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Recover
          </button>
        </div>
      </form>
      <p className="text-center">
        <a className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
          Have account ? Sign In
        </a>
      </p>
    </>
  );
}
