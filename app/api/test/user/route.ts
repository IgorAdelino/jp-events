import { createUser, deleteUser } from '@/lib/actions/user.actions'

export async function POST() {
  await createUser({
    clerkId: 'user_2hCCufSrHtQTAFJmMJgu5jyH1aL',
    email: 'f7NtT@example.com',
    username: 'test',
    firstName: 'test',
    lastName: 'test',
    photo: 'test',
  })

  return new Response('ok', { status: 200 })
}

export async function DELETE() {
  await deleteUser('user_2hCE99TDi5oLgxlpQVF4itCS0Eh')

  return new Response('ok', { status: 200 })
}
