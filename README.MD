# Rate
Rate.js Is a command that will give you the choice to rate any users within your discord server.

# Modules (2)
```
- npm i discord.js
- npm i node.js
```
# File

<b>Timer.js</b> should be inserted in your <u>Commands-file</u><br>
- Find more about <b>Commands-file</b> <a href=https://github.com/Shedhatch/Commands-file> right here </a>

# How to use <b>Rate.js</b> ?

- You'll need to define a prefix ("/" by default).<br>
- Use rate following your prefix.<br>
- Indicate the user you would like to rate by mentioning them.<br>

<i><b>Global usage:</i></b><br><br>
<your_prefix / rate / @user>

<i><b>Example</i> `(prefix = "/" | user = "@Shedhatch")`<i>:</i></b><br>

/rate @Shedhatch (will return a random number between `0` and `10`)

# Additional feature

<i>Wanna get rated 10/10 everytime ?<br>
Imagine bypassing the rate system ?</i><br><br>

Well, I'll give you an additionnal feature that will help you to do so! 

<details>
  <summary>🤫 pssst It's right here</summary><br>
  
- Under the config comment, define an "admin" by indicating their user Id.<br>
  <a href=https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID->How to find my ID on Discord ?</a>
```js
let admin = "id";
```
- Now let's return our secret rate !
```js
if(ratus.id === admin) {
  return message.channel.send(`I'd give **__${ratus.user.username}__** ${maxrate}/10`);
  }
```
 <br>
  Still having troubles to understand ? Don't worry this part Is fully included in the final code!
</details>



# Version V11 -> V12

- [x] The following code Is <strong>not up to date</strong> (running under V11)<br>
- You can learn more V12 It by following <a href=https://discordjs.guide/additional-info/changes-in-v13.html#before-you-start>this link</a>
