---
path: "/introduction-to-the-safe-network"
date: "Mon Oct 01 2017 22:37:38 GMT-0300 (-03)"
title: "Introduction to the SAFE Network"
---

![](https://cdn-images-1.medium.com/max/2000/1*JclpQbleMBR_HSRR_dBrow.jpeg)

# Introduction to the SAFE Network

We now live in the very dawn of the [Information
Era](https://en.wikipedia.org/wiki/Information_Age) and the global network we
call the World Wide Web is the medium we use to exchange data. At the stage
we’re currently at the whole system is centralized in the hands of a few
corporate giants (Facebook, Google, etc.) who have ownership of most of
humanities data, just like corporations have had control over production of
goods, state control over sovereignty and banks control over money in the
Industrial Age. And up until now we seemed to be heading in the same direction
in this new age, continuing to centralize, but a few technologies brought by the
web began challenging this *ethos*. Peer-to-peer networks, such as Bit Torrent
began disrupting the idea of ownership and copyright. More recently Bitcoin has
disrupted the idea of how money is managed by creating a open and transparent
currency where no one entity has control over it. Allied with the
[Open-Source](https://en.wikipedia.org/wiki/Open-source_model) movement, this
opened way to thinking everything in a decentralized manner: from money, to
[organizations](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization),
to
[government](https://medium.com/@simonvc/one-world-one-database-432ef513da01).
But to get there we first need to decentralize our medium of exchange for the
XXI century: the web.

This is not an easy task, and harder still is to convince common users to use
this new and decentralized web instead of using the “corporate web”. Many
projects are trying to achieve this, here are a few of them listed from the
[secure scuttlebutt website](https://www.scuttlebutt.nz/#other-projects):

* [Matrix](http://matrix.org/)
* [Bitcoin](https://bitcoin.org/)
* [Ethereum](https://www.ethereum.org/)
* [Zerocoin](http://zerocoin.org/)
* [MaidSafe](http://maidsafe.net/)
* [IPFS](https://ipfs.io/)
* [Dat](http://datproject.org/)
* [Solid](https://github.com/solid/solid)
* [cjdns](https://github.com/cjdelisle/cjdns)
* [Syncthing](https://syncthing.net/)
* [Indie](https://ind.ie/)
* [Twister](http://twister.net.co/)
* [WebTorrent](https://webtorrent.io/)
* [StrongLink](https://github.com/btrask/stronglink)
* [RetroShare](http://retroshare.sourceforge.net/)
* [ZeroNet](http://zeronet.io/)
* [Snackis](https://github.com/andreas-gone-wild/snackis)

We at [Moinho Digital](https://github.com/MoinhoDigital) have been exploring
these technologies for a while now, and we hope to start documenting our
development journeys from here on. As our first experiment we’ll start with the
[Safe Network](https://maidsafe.net/), which seems to be one of the most
promising and ambitious projects, that began 11 years ago (2006), and aims to
replace the whole web with a decentralized and autonomous version of itself.

### The World’s First Autonomous Data Network

> [MaidSafe](https://maidsafe.net/) is a company based in Troon, Scotland. They
> have been working on designing and implementing the SAFE Network since 2006.
MaidSafe initially raised $5 million USD in investments from local individuals,
friends and family to make the SAFE Network a reality.

Bitcoin is the most known project in the crypto space, and
[blockchain](https://en.wikipedia.org/wiki/Blockchain) is the technology that
made it, and many other projects like it possible. But most of them aim on
decentralizing and anonymizing one thing: finance. The SAFE Network is aiming at
something bigger, not only to decentralize ledgers but all data:

> Blockchain based storage solutions that store a data identifier (e.g. hash) in a
> blockchain, but store the data ‘somewhere else’ do not improve the security of
our data. That ‘somewhere else’ still needs to be secured, and if this data can
be deleted, or our access denied these ‘solutions’ are not fit for purpose. The
SAFE Network removes people from the management of our information to protect
the world’s data.

It also takes care of authentication and domain naming for us, in a completely
secure, decentralized and autonomous way.

Instead of running wasteful protocols such as Bitcoin’s and Ethereum’s
Proof-of-Work Maid has designed a self sustainable protocol called
Proof-of-Resource which uses [SafeCoin](https://maidsafe.net/safecoin.html) to
power this new web:

> Safecoins are given as an incentive to users for providing their resource to the
> network. This resource is their: storage space, CPU, bandwidth and online time
that enable the encrypted chunks of network data to be stored and retrieved from
their computer. The process of providing resource and receiving safecoin in
return is called ‘Farming’. Each piece of encrypted network data is stored in a
Farmer’s ‘Vault’, a data storage and management location on the Farmer’s
computer which they cannot read, or access. The SAFE network is designed to
self-manage these resources.

There’s an [architecture
overview](https://safe-network-explained.github.io/architecture), that I
definitely recommend to get a clearer understanding of what the whole SAFE
project is.

### Developing for the Safe Web

![](https://cdn-images-1.medium.com/max/800/1*MivryzLP8Usf3wdSnXfzrw.png)
<span class="figcaption_hack">Safe Browser 0.6.0 — Alpha 2 Network</span>

As I write, the network is currently in Alpha 2 and centralized on Maid’s
servers, but we can already start playing with some of it’s features by getting
level 1 of Trust in the [Safe Forum](https://safenetforum.org/), read rules
[here](https://safenetforum.org/t/trust-level-1-requirements/15200). Once you
can claim an invite, this is what you’ll get:

![](https://cdn-images-1.medium.com/max/800/1*SPjK6IXdhiBpyf9z0CrDaQ.jpeg)
<span class="figcaption_hack">Make sure to click on the “SET IP” button.</span>

In the future each node in the network will have [Safe
Vault](https://github.com/maidsafe/safe_vault) running, which will do what the
servers are doing in the test networks.

There’s a [forum just for devs,](https://forum.safedev.org/) which has an
awesome [starting guide
](https://forum.safedev.org/t/how-to-develop-for-the-safe-network-draft/843)with
how to take care of basic setup and mocking for the Safe Network.

#### Safe Browser

![](https://cdn-images-1.medium.com/max/800/1*0FQHrjzamdN266jelB-jFg.png)
<span class="figcaption_hack">Safe Authenticator</span>

Just like the web, they use a browser as the entry point to the network. The
[Safe Browser](https://github.com/maidsafe/safe_browser/releases) is based on
one of my personal favorite projects, [Beaker
Browser](https://beakerbrowser.com/). But the differences are important. The
Safe Browser only navigates on the Safe Network, completely closed from the
*http* web (open to WebRTC). It also serves as entry point to the Safe Network
API through the [Safe App Beaker Plugin
](https://github.com/maidsafe/beaker-plugin-safe-app)and takes care of
authenticating user by using the [Authenticator Beaker
Plugin](https://github.com/maidsafe/beaker-plugin-safe-authenticator).

![](https://cdn-images-1.medium.com/max/800/1*FPBvD8PqoxdF-IdjXtT16A.png)
<span class="figcaption_hack">Safe Browser default new tab settings page</span>

#### Hosting

![](https://cdn-images-1.medium.com/max/800/1*QPe5wWVEPkswL7HafOkHAQ.png)
<span class="figcaption_hack">test service bucket</span>

Just like any other application, Safe Network applications run on *HTML*, *CSS*
and *Javascript. *To publish a new app to the network we can use the [Web
Hosting Manager](https://github.com/maidsafe/safe_examples/releases/), and it’s
just like adding any other static application to an
[S3](https://aws.amazon.com/s3/) bucket for example.

![](https://cdn-images-1.medium.com/max/800/1*yO-N3MHK_clc0qoeCY1yDQ.png)
<span class="figcaption_hack">list of services</span>

#### Domain

The naming system is quite simples and intuitive, kind of like how a repository
in a Git project is named:

*safe://service.user_id*

So if with a public id `luandro` I create a `hello` service, to access my domain
just enter `hello.luandro` in the browser, and we’re connected ;)

![](https://cdn-images-1.medium.com/max/800/1*pHxtDy1zceKZ6OYXWlKNtQ.png)
<span class="figcaption_hack">Make sure it’s got at least 3 characters!</span>

#### Developer Experience

Lately more and more developers have gotten accustomed to having a good DX
(Developer Experience) by using tools for observing and time traveling app state
like [redux-dev-tools](https://github.com/gaearon/redux-devtools) and tools to
keep development app in sync with code, while maintaining state changes across
reloads, like
[react-hot-reloading](https://github.com/gaearon/react-hot-loader). The first
thing we noticed while experimenting with the Safe Browser was that such tools
didn’t work because the browser uses a different address for localhost, which
looks something like: `safe://localhost://p:3000`.

So it’s best to keep UI development in *unsafe* *browsers* or make sure to
change host and port for your development tools.

#### App Development

To get a quick glimpse of what developing for the Safe Network is like we can
simply `git clone https://github.com/maid_safe/safe_examples.git` to get all the
[oficial](https://github.com/maidsafe) examples. Maid supports all platforms:
web, native desktop and native mobile. There are examples for all of them, but
for [mobile](https://github.com/maidsafe/safe_mobile) they’re using
[Xamari](https://www.xamarin.com/platform)n, which is not something I’m really
into as a Javascript developer. It would be nice to have a [React
Native](https://facebook.github.io/react-native/) lib to make it simple to run,
read and experiment with, like they’re doing with the rest of the examples using
plain `js` or [React](https://reactjs.org/) and [Redux](http://redux.js.org/).

For native desktop applications the oficial examples use the well known
[Electron](https://electron.atom.io/) framework. Since Electron runs on
[Node.js](https://nodejs.org/) they make use of the
[safe-node-app](http://docs.maidsafe.net/safe_app_nodejs/) lib. We can see what
it’s API is like on the [Web Hosting
Manager](https://github.com/maidsafe/safe_examples/blob/master/web_hosting_manager/app/lib/api.js)
and [Email
App](https://github.com/maidsafe/safe_examples/blob/master/email_app/app/safenet_comm.js)
examples. But even when developing stand alone desktop apps we need to have the
Safe Browser running to authenticate.

Developing web applications for the Safe Browser is just like developing any
other web app with the additional [Safe API
](http://docs.maidsafe.net/beaker-plugin-safe-app/)through the `window` object
(and the fact you are completely closed from the “corporate web” ). Here’s a
short cheatsheet of how the parts connect, thanks Joseph Meagher for
[this](https://github.com/josephm1/Safe-API-Overview/blob/master/quickoverviewofsafeapi.md#safe-api-flow):

![](https://cdn-images-1.medium.com/max/800/1*y3JEBMA-K2Zyfd4pp2Wu-w.png)
<span class="figcaption_hack">Safe Network API flow</span>

A good place to check what actual code looks like is within the
[web-api-playground](https://github.com/maidsafe/safe_examples/tree/master/safe_web_api_playground/static/js/code-snippets),
which has some snippets thought out to us by the core team. And there’s a even a
[web_starter](https://github.com/hunterlester/safe_web_starter_pack) by
[hunterlester](https://github.com/hunterlester/) for a cleaner boilerplate.

#### Mocking

The test network has a limit per user of 1000 `PUTS` per user, so in order to
get some real development done we have to mock the network. Make sure to read
the official
[post](https://forum.safedev.org/t/how-to-develop-for-the-safe-network-draft/843)
on the topic.

> When the SAFE Browser, or another application, is built with mock-routing
> enabled, it’s not connecting to a live network, it’s interfacing with a local
database that is created on your system to simulate network operations.

> This saves a great deal of time and provides a safe space for your application
> or website to initially test operations.

We can do this by running our own version of the Safe Browser with mock enabled,
just go to the [repo](https://github.com/maidsafe/safe_browser) and follow the
instructions on how to get that working.

#### Extras

Since the the Safe Browser is such a controlled environment we can just write
`ES7` with no need for transpilling, like
[this](https://forum.safedev.org/t/javascript-tips-for-using-the-safe-api/958):

    async function sendMessage() {
      try {
        const mutationHandle = await      window.safeMutableData.newMutation(auth)

    const date = new Date()
        const time = date.getTime()

    await window.safeMutableDataMutation.insert(mutationHandle, time.toString(), textarea.value)

    await window.safeMutableData.applyEntriesMutation(mdHandle, mutationHandle)

    Materialize.toast('Message has been sent to the network', 3000, 'rounded')
        window.safeMutableDataMutation.free(mutationHandle)
        getMutableDataHandle('getMessages')

    textarea.value = ''
      } catch (err) {
        console.log(err)
      }
    }

### Next Steps

Our first mission is to build a wallet inside the Safe Network so that users can
create and exchange tokens, so that users can benefit from the networks
security, privacy, speed and cost, which is supposed to be way ahead of most
blockchain based projects out there are doing. Please check the project’s
progress [here](https://github.com/MoinhoDigital/safewallet).

In future posts we’ll better explain the Safe API as we better understand it
while create the Safe Wallet. Please stay tuned, and thanks for reading.

A special thanks to [Eddy Johnson
](https://safenetforum.org/u/19eddyjohn75/summary)who has been keeping us posted
on Safe Network updates, and sponsoring our explorations.

* [Blockchain](https://medium.com/tag/blockchain?source=post)
* [Maidsafe](https://medium.com/tag/maidsafe?source=post)
* [Cryptocurrency](https://medium.com/tag/cryptocurrency?source=post)
* [Safecoin](https://medium.com/tag/safecoin?source=post)
* [Bitcoin](https://medium.com/tag/bitcoin?source=post)

Clapping shows how much you appreciated Luandro’s story.

### [Luandro](https://medium.com/@luandro)

Crazy person. Crazy about decentralization and Swaraj = Self governance for
communities. Javascript developer exploring crypto/decentralized development
space.
