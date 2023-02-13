export async function sendRequest(url: string, { arg }: any) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: { 'Content-type': 'application/json;charset=UTF-8' }
  })
}
