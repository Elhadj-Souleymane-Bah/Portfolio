"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logedInUser, setUser } from "../../stores/action_creators";
import { useRouter } from "next/navigation";

const FakeLogin = () => {
  const [email, setEmail] = useState(""); // Pour l'email
  const [motDePasse, setMotDePasse] = useState(""); // Pour le mot de passe
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simuler la réponse du login avec les informations saisies
      const fakeUser = {
        data: {
          email,
        },
        token: "123456abcdef", // Un token fictif
      };

      dispatch(logedInUser(fakeUser)); // Mettre à jour le state avec fakeUser et token
      dispatch(setUser(fakeUser.data)); // Mettre à jour le state avec les informations de l'utilisateur
      router.push("/"); // Rediriger vers la page d'accueil ou autre
    } catch (err) {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-250 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 mt-[70px]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Connexion</h1>
            <p className="text-gray-600 mt-2">Accédez à votre espace personnel</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Champ pour l'email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border text-black border-black focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="motDePasse" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                id="motDePasse"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border text-black border-black focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
                minLength={6}
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion en cours...
                </span>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Pas encore de compte?{" "}
              <a href="/users/add" className="font-medium text-purple-600 hover:text-purple-500">
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeLogin;
