import { createUser } from '@/lib/actions/user.actions'

export async function POST() {
  await createUser({
    clerkId: '123',
    email: 'f7NtT@example.com',
    username: 'test',
    firstName: 'test',
    lastName: 'test',
    photo: 'test',
  })

  return new Response('ok', { status: 200 })
}
