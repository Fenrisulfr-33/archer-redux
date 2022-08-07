# **Welcome to my website**
---

#### *Table of Contents*
1. [Why did I make this?](#why-did-i-make-this)
2. [The Tech Stack](#the-tech-stack)
3. [Structure of the Pages](#structure-of-the-pages)
4. [Future Goals & Updates](#future-goals--updates)

---

## ***Why did I make this?***

It started off as a template I could always look back to when trying to start and or improve my knowledge of how websites should be structured. It turned into a massive project and I got carried away, so after massive refactoring and brining in a new tech stack I finally decided to publish this.

---

#### **The Tech Stack**

While this is still in the works I will cover what I am using so far and it's purpose

1. [Next.js](#nextjs)
2. [Redux Toolkit](#redux-toolkit)
3. [TaildwindCSS](#tailwindcss)
4. [React](#react)
5. [MongoDB](#mongodb--mongoose--express)
6. [Express](#mongodb--mongoose--express)
7. [Mongoose](#mongodb--mongoose--express)
8. Node.js
9. Some other packages I will list at a later time.

### **Next.js**

Orignally I built this site serverless, and Immdiately found out how annoying it can be to not take full advantage of getServerSideProps(), and with MongoDB realm the integration of the two seemed impossible. So that lead me to create the server that way I could take advantage of Next.js Server Side Rendering. I have found it amazing and I know I still haven't seen the full potiential.

One of my favortive features was the Next.js feature for while the Server is loading pages. The `routeChangeStart` and `routeChangeComplete` made using a universal loading component so much easier then ternanry operators or the use of state.
```js
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', (url) => { 
    setLoading(true);
    console.log('Loading...');
  });
  Router.events.on('routeChangeComplete', (url) => { 
    console.log('Loaded');
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
```

### **Redux Toolkit**

I am atcually not that good with Redux, or familiar with it, however this is my first site using a user login page and atcually holding onto a token for the entire duration of the browser use. So I watched a tutorial and managed to get this to work, espcially considering the tutorial was just React and they used a bunch of componenets and features I did not like. But I am starting to get the jist of it deffinately need more practice and classes.

### **TailwindCSS**

I am absolutely in love with Tailwind and their [Tailwind Labs](https://www.youtube.com/c/TailwindLabs) youtube channel. I am not the best at styling, and I feel like after I get a job I might sign up for a self-paced UX/UI course because I do find it intresting. I mostly care about industry standards but alot of people I have interviewed for have so many different prefrences, for the purpose of my own projects I will not stop using this. There documentation is alright at best, usually the stuff they show in the docs you cannot copy and paste to get it to work because the parent element might be blocking a child class, or it just does not work the way you would think. 

But once I figured out how to apply TailwindCSS classes like below, I really started to enjoy it more because I was not cluttering my react comoponenets with huge strings of CSS classes.
```css
.btn {
    @apply 
    col-span-1
    
    h-10 
    w-fit
    font-mono
    font-extrabold
    text-stone-800
    bg-stone-300  
    
    rounded-lg p-2 
    
    shadow-xl 
    shadow-stone-200/50

    hover:bg-stone-400 
    hover:translate-y-0.5 
    hover:translate-x-0.5
}
```

Lastly TailwindCSS has some packages and custom features you can create in their config file. I am not an expert at it by any means but one day I would like to have alot of custom classes after I really learn how to get a better color palette and such.


### **React**

Do I really have to say anything about this? While I know there is more to React like there is more to all of these I am really just getting it's basic benefits for this project. I really only use `useState()` & `useEffect`, and since I am using alot of `getServerSideProps()` from Next.js I really don't need `useEffect()`. You will be able to see in the README.md for the client side my file structure and how I am able to really get the most out of my list componenets for multiple things on multiple pages instead of needing seperate components all over the place.

### **MongoDB & Mongoose & Express**

I atcually started databases with PostgreSQL and ever since I have taken [MongoDB University's](https://university.mongodb.com/) courses I have never looked back. They make it so simple to see your data without having to install a bunch of third party crap, the MongoDB Compass GUI is amazing, and since I have root permissions testing has been so easy. I can just delete documents I make just to try some update or post api calls. I would like to post more about MongoDB and Mongoose and my data structure for this project but, I will probably leave that in the backend folder README.md.

---

## **Structure of the Pages**

The basic naviagtion bar at the top has these features, however my next big update I would like to have a beter Nav bar and only have on at the top. I was working on integration multiple nav bars but now it just seems silly, because it is smarter to keep the Nav in the header and not have anything else in the main body.

    |-- Home Page
    |-- Articles Page
    |-- Code Page
    |-- Pokemon Page
    |   |-- Home
    |   |-- National Dex
    |   |-- Moves
    |   |-- Brilliant Diamond & Shinning Pearl
    |   |-- Sword & Shield
    | 
    |--TemTem Page
    |-- Login
    |-- Register

#### **The Articles Page**

This shows some markdown files I have converted in React componenets, using this mostly for testing until I setup a CMS.

#### **The Code Page**

This will also have articles but mostly display some code snippets of how the site is made up.

#### **The Pokemon Page**

This is the Hub of the website for now as it has the most features and things to see and check out.

---

## **Future Goals & Updates**

Need to make sure when the user is logged in they can only access the competitive builds upload and dashboard, but they will all go to the respective page and can be voted on. Once the vote hits a certain number it will be moved into a different database of permant builds and you username on display.

A Create Comp Build page that takes in a Game parameter and allows user to have a dashboard with Competitive features, including updates, and deltes.

This is just a basic layout for how I would like the Naviagtion to look and what each page would atcually do.

    |-- Home Page
    |   |-- Patreon Page/Donate Page
    |
    |-- Articles Page
    |   |-- Indivdual Article Page
    |
    |-- Code Page
    |   |-- Tutorial Videos
    |   |-- Articles Certain Technologies
    |
    |-- Pokemon Page
    |   |-- Home
    |   |-- National Dex
    |   |-- Moves
    |   |-- Abilities
    |   |-- Competitive
    |   |   |-- Sword & Shield
    |   |   |-- Brilliant Diamond & Shinning Peral
    |   |   |-- Ultra Sun & Ultra Moon
    |   |  
    |   |-- Brilliant Diamond & Shinning Pearl
    |   |   |-- Walkthrough
    |   |   |-- Misc Articles
    |   |   
    |   |-- Sword & Shield 
    |   |   |-- Walkthrough
    |   |   |-- Misc Articles
    |   |
    |   |-- Legends Arcues
    |   |   |-- Walkthrough
    |   |   |-- Misc Articles
    |   |
    |   |-- Ultra Sun & Ultra Moon
    |   |   |-- Walkthrough
    |   |   |-- Misc Articles
    |
    |-- TemTem Page
    |   |-- Dex
    |   |-- Competitive
    |   |-- Walkthrough
    |
    |-- Login
    |-- Register
    |-- Logout

I know this it alot but you need to set your goals high and pray you land just a little short.

I also need to bring in the reusable Pokemon Componenets so no matter where you are on the site all information is always presented the same except for the Indivdual Page from the National Dex which should present every piece of information. Below is the old model I built and I would like to continue to use this build.

Also don't mind my mentor at the bottom of the screen.

![Old Pokemon Competitive Setup](/images/comp_pokemon_old.png "Comp Pokemon Layout")