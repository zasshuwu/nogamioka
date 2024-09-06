let clients: any[] = [];

export function addClient(client: any) {
  clients.push(client);
}

export function removeClient(client: any) {
  clients = clients.filter((c) => c !== client);
}

export function broadcast(data: object) {
  clients.forEach((client) => {
    client.send(JSON.stringify(data));
  });
}
