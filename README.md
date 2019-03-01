# Anne-Lynn Design

A portfolio project. Uses Gatsby V2.

## Setup

1.  **Install.**

    This is a local node project that uses LTS Carbon. No containers. To start up, just install via `npm i`!

2.  **Enviornment Variables**
    I've got two in a sample .env file which are used to plug directly into contentful.

## Branches

There are three main branches in this repo: `master`, `develop` and `preview`. Both `master` and `preview` contain the same content except that the preview branch is set up in `gatsby-config` to observe both the content that's published as well as the stuff that's in draft status. The other branch, `develop`, is just used for a staging server.

## Site Status

Annelynn.com is deployed via netlfy, and has the domain managed through their DNS settings as well.

| Description                | Url                                          | Netlify Link                             | Status                                                                                                                                                                    |
| -------------------------- | -------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Development/Staging Server | [annelynn.com](annelynn.com)                 | [link](annelynn-development.netlify.com) | [![Netlify Status](https://api.netlify.com/api/v1/badges/449671a9-bfdc-4437-8c0c-9ee372511db9/deploy-status)](https://app.netlify.com/sites/annelynn-development/deploys) |
| Preview Site               | [preview.annelynn.com](preview.annelynn.com) | [link](annelynn-preview.netlify.com)     | [![Netlify Status](https://api.netlify.com/api/v1/badges/fd460484-b4ec-4db5-b2d7-617f93f72030/deploy-status)](https://app.netlify.com/sites/annelynn-preview/deploys)     |
| Live Site                  | [staging.annelynn.com](staging.annelynn.com) | [link](annelynn.netlify.com)             | [![Netlify Status](https://api.netlify.com/api/v1/badges/b20738f6-5647-45bd-b865-bc443ee710df/deploy-status)](https://app.netlify.com/sites/annelynn/deploys)             |
