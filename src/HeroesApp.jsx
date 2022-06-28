import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from './auth/context'
export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

