const { PORT } = process.env
const server = Bun.serve({
  port: +PORT! | 5000,
  fetch(req, server) {
    return new Response('hollo')
  },
})

console.log(`listening on port ${server.port}`)
