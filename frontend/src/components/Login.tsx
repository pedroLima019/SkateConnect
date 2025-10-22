import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  type CredentialResponse,
} from "@react-oauth/google";

const clientId =
  "914788968769-u325essishgnlvtqljdnuusgas8mae2l.apps.googleusercontent.com.apps.googleusercontent.com";

const Login = () => {
  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    console.log("Token recebido:", credentialResponse.credential);
  };

  const handleGoogleError = () => {
    console.error("Erro ao fazer login com Google");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex min-h-screen items-center justify-center bg-black text-white p-2.5">
        <Card className="w-full max-w-sm bg-neutral-900 border border-neutral-800">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Bem vindo ao SkateConnect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              className="w-[230px] bg-zinc-600 p-3 flex items-center"
            >
              Entrar
            </Button>{" "}
            <Button className="w-full flex justify-center ">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
              />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
