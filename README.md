## Aerosol Alliance Website

This is the repository for the aerosol alliance website.

> The Aerosol Alliance has formed to challenge the way the spray paint industry
> manufactures, distributes and recycles aerosol spray cans. As creatives that
> are passionate about Graffiti and Urban art, we hope to unite the artistic
> community to drive research, innovation and solutions for our most loved
> medium.

## Tech stack

We use React along with [NextJS](https://nextjs.org/). For styling we use
[TailwindCSS](https://tailwindcss.com/). The Content ist stored in the headless
CMS [Prismic](https://prismic.io/). For deployment we use
[Vercel](https://vercel.com/).

## App strucure

### 📄 Pages

Every file inside the pages folder will render as a page with its own route.

### 🍕 Slices

[Slices](https://prismic.io/docs/core-concepts/slices) are reusable Prismic
Components. They can be used on pages to add dynamic content.

You can use the slicemachine to see all the available slices or add new ones.
See [Prismic Slicemachine](#prismic-slicemachine) on how to use it.

### 🧱 Components

Files which are reusable and aren't slices or pages will be located in the
components folder.

## 🧑🏻‍💻 Contributing

### Install VSCode extentions

To ensure the best developer experience, make sure to install the recommended
vscode extensions.

### Install dependancies

Install the dependencies:

```bash
npm install
```

### Local development server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

### Prismic Slicemachine

To create new prismic slices or custom types locally, you can use the
slicemachine.

```bash
npm run slicemachine
```

It will than be availale on [http://localhost:9000](http://localhost:9999).

Check out the
[documentation](https://prismic.io/docs/technologies/create-and-model-a-component-nextjs)
on how to use it.

### Build for production

To create a production build of the project, run the following command:

```bash
npm run build
```
