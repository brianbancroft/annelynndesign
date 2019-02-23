# Anne-Lynn Design

A portfolio project. Uses Gatsby V2.

## Setup

1.  **Install.**

    This is a local node project that uses LTS Carbon. No containers. To start up, just install via `npm i`!

2.  **Enviornment Variables**
    I've got two in a sample .env file which are used to plug directly into contentful.

## Branches

There are three main branches in this repo: `master`, `develop` and `preview`. Both `master` and `preview` contain the same content except that the preview branch is set up in `gatsby-config` to observe both the content that's published as well as the stuff that's in draft status. The other branch, `develop`, is just used for a staging server. 
