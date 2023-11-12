import { useSession } from "next-auth/react"
import { Button } from 'flowbite-react';
import { signIn } from "next-auth/react"
export default function Admin() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  })

  if (status === "loading") {
    return
    <div>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">請登入帳號</h1>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">要觀看tv請先登入謝謝。</p>
            <button color="blue" onClick={() => signIn()}>Sign in</button>
        </div>   
    </div>
</section>
      </div>
  }

  return "請購買帳戶"
}
