import { defineController } from './$relay'
import { getTasks, createTask } from '$/service/tasks'

<% if (testing === 'none') { %>export default defineController(() => ({
  get: async () => ({ status: 200, body: await getTasks() }),
  post: async ({ body }) => ({
    status: 201,
    body: await createTask(body.label)
  })
}))<% } else { %>const print = (text: string) => console.log(text)

export default defineController(
  { getTasks, print },
  ({ getTasks, print }) => ({
    get: async ({ query }) => {
      if (query?.message) print(query.message)

      return { status: 200, body: await getTasks(query?.limit) }
    },
    post: async ({ body }) => ({
      status: 201,
      body: await createTask(body.label)
    })
  })
)<% } %>
