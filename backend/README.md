# **Backend**

---

#### *Table of Contents*

1. [Routes](#routes)
2. [Models](#models)

---

## **Routes**


#### **Article routes**  
    
| route | requests | purpose |
| -     | -        | -       |
| `/articles` | `GET REQUEST` | This route is calling from an array for the time being
| `/articles/:id` | `GET REQUEST` | Gets an indivdual article

#### **Pokemon routes and API requests**   


| route | requests | purpose |
| -     | -        | -       |
| `/pokemon/national` | `GET REQUEST` | This gets a list of every pokemon
| `/pokemon/national/:id` | `GET REQUEST` | This gets on indivdual pokemon
| `/pokemon/swsh/comp` | `GET REQUEST` | This gets a list of all Competitive Pokemon in Sword & Shield
| `/pokemon/swsh/comp/create` | `POST REQUEST` | This allows a signed in user to create a custom build
|`/pokemon/bdsp/competitve` | `GET REQUEST` | This gets all competitve pokemon from the BDSP database

#### **Users**  

| route | requests | purpose |
| -     | -        | -       |
| `/users/register` | `POST REQUEST` | Allows a user to sign up
| `/users/login` | `POST REQUEST` | Allows a user to sign in
| `/users/me` | `POST REQUEST` | Allows a user to see their specific dashboard

---

## **Models**

Alot of my models were already created in JSON object I custom built using a JSON - .js - JSON converter function I wrote. It is in a different repo but if you look at it you can see the pokedex JSON object I created with it, from there I uploaded that to my MongoDB directly. 

I do have a Sword and Shield create a custom comp build model I would like to share.

```js
const swshCompSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    ability: {
        type: String,
        required: [true, 'Please add a ability']
    },
    moveOne: {
        type: String,
        required: [true, 'Please add a first move']
    },
    moveTwo: {
        type: String,
        required: [true, 'Please add a second move']
    },
    moveThree: {
        type: String,
        required: [true, 'Please add a third move']
    },
    moveFour: {
        type: String,
        required: [true, 'Please add a fourth move']
    },
    item: {
        type: String,
        required: [true, 'Please add a item even if its not important to the build']
    },
    nature: {
        type: String,
        required: [true, 'Please add a nature']
    },
    hpEV: {
        type: Number,
        required: [true, 'Please add a Hp EV 0-252']
    },
    atkEV: {
        type: Number,
        required: [true, 'Please add a Atk EV 0-252']
    },
    defEV: {
        type: Number,
        required: [true, 'Please add a Def EV 0-252']
    },
    spAtkEV: {
        type: Number,
        required: [true, 'Please add a spAtk EV 0-252']
    },
    spDefEV: {
        type: Number,
        required: [true, 'Please add a spDef EV 0-252']
    },
    spdEV: {
        type: Number,
        required: [true, 'Please add a Spd EV 0-252']
    },
    briefDesc: {
        type: String,
        required: [true, 'Please add a small description']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});
```