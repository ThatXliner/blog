# syntax=docker/dockerfile:1.7
# Official Node image tags may lag a security release. Verify the upstream archives.
FROM python:3.13-slim@sha256:cf50a4f6ac4f026458b08d5222023d700ac806410dff5e9ca8728fa44f2b850f AS unpack
ARG TARGETARCH
ADD --checksum=sha256:33c37be234ba8bee041961047b19160f4d7d0f164e8e246f78bdd10feff148b3 https://nodejs.org/dist/v24.22.1/node-v24.22.1-linux-arm64.tar.gz /archives/node-arm64.tar.gz
ADD --checksum=sha256:eb6728e77c576a35162c122c45ccadf224d89ff00abc8dae46cc2897c6002d7c https://nodejs.org/dist/v24.22.1/node-v24.22.1-linux-x64.tar.gz /archives/node-amd64.tar.gz
RUN python3 -c 'import pathlib,tarfile,sys; source=tarfile.open("/archives/node-"+sys.argv[1]+".tar.gz"); member=next(m for m in source.getmembers() if m.name.endswith("/bin/node")); target=pathlib.Path("/node"); target.write_bytes(source.extractfile(member).read()); target.chmod(0o755)' "$TARGETARCH"

FROM debian:trixie-slim@sha256:62bd423aeee912639ca8ee681c2b762cb3e25137e0a92b20be455898a9f034ad
COPY --from=unpack /node /usr/local/bin/node
RUN node --version | grep -x v24.22.1
WORKDIR /app
CMD ["node", "server.mjs"]
