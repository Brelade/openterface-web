# Openterface Web
To be used primarily with the Openterface KVM-Go

Based on the [NanoKVM-USB](https://usbkvm.sipeed.com) browser version project.

## Development

```shell
cd browser
pnpm install
pnpm dev
```

## Deployment

1. Execute `pnpm build` to build the project.
2. Execute `pnpm install -g http-server` to install http-server.
3. Execute `cd dist` to change working directory to `dist/` .
4. Execute `http-server -p 8080 -a localhost` to run the service.
5. Open the Chrome browser and visit `http://localhost:8080`.

### Deploy in Docker

```shell
git clone https://github.com/sipeed/NanoKVM-USB.git
cd NanoKVM-USB
docker-compose up -d
```

Then visit `http://localhost:9000` in your browser.