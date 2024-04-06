# Portfolio

Hello, this is my personal homepage. In this project, i want learn and have fun with svelte, tailwindcss and devcontainer.

## Dev Container

This repository provides a dev container with all necessary tools to have a consistent and pleasant development experience.
Just open the repository in Visual Studio Code and you will be prompted to open the repository in a dev container.
It will automatically install all necessary tools and extensions.
After that tpye localhost in your browser to see the homepage.

## Troubleshooting

### Sharing Git credentials with your container

At first I was getting a permission denied error when trying to push.

After running `ssh-add` on the host, the issue was resolved.
This is documented in vs code's documentation – [Sharing Git credentials with your container](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials).

## Building a static site for production

To build a static site, you can either:

- run `pnpm run build` inside the dev container
- or just run `docker compose up`

Both methods will generate the static site in the `build` directory.
