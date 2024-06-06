import React from "react";
import mockup from "./mockup.png";
import "./App.css";
import ShowAvatar from "./avatar";
import { pseudo2avatarURL, fetchAvatar, generateGravatarURL } from "./utils";

function App() {
  return (
    <div className="App">
      <h1>Step 1</h1>
      <p>
        Create a <code>ShowAvatar</code> component as show in the mockup below:
      </p>
      <img src={mockup} alt="mockup" />
      <p>
        When the pseudo is entered in the field, the avatar changes
        automatically.
      </p>
      <p>
        The component is taking a <code>props</code> named
        <code>resolveAvatar</code>.<br /> <code>resolveAvatar</code> is a
        function taking a pseudo as argument, and returning a promise that
        resolves to the URL of the avatar.
      </p>
      <p>
        Please use <code>pseudo2avatarURL</code> (from <code>utils.ts</code>) as
        this function.
      </p>
      {/* TODO: place here the call to ShowAvatar using pseudo2avatarURL: */}
      <ShowAvatar resolveAvatar={pseudo2avatarURL} />

      {/*
        *********************************************************************
                                      STEP 2
        */}
      <h1>Step 2</h1>
      <p>
        We will use the{" "}
        <a href="https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-profile">
          RealWorld API
        </a>{" "}
        to fetch the avatar of a user.
      </p>
      <p>
        To resolve the username <code>jake</code> for example, call the URL{" "}
        <code>
          <a href="https://api.realworld.io/api/profiles/jake">
            https://api.realworld.io/api/profiles/jake
          </a>
        </code>
        .
      </p>
      <p>
        Create a dedicated function to call that API, and use the{" "}
        <code>ShowAvatar</code> component to see that everything works as
        intended.
      </p>

      <ShowAvatar resolveAvatar={fetchAvatar} />

      {/*
        *********************************************************************
                                      STEP 3
        */}
      <h1>Step 3</h1>
      <p>
        This time, we will use <a href="https://gravatar.com">Gravatar</a> (
        <a href="https://en.gravatar.com/site/implement/images/">doc here</a>
        ).
      </p>
      <p>
        Assume that the email address of the user is the same as her username
        followed by <code>@wootap.me</code>. For example, the user{" "}
        <code>jnipvo</code> has <code>jnipvo@wootap.me</code> as email address.
      </p>
      <p>
        Create a dedicated function to call that API, and use the{" "}
        <code>ShowAvatar</code> component to see that everything works as
        intended.
      </p>
      <ShowAvatar resolveAvatar={generateGravatarURL} />
    </div>
  );
}

export default App;
