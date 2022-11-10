import React from 'react';
import UseTitle from '../UseTitle/UseTitle';

const Blogs = () => {
  UseTitle('blogs')
  return (


    <div className="px-4 py-16 mx-auto lg:px-8 lg:py-20">
      <div className="grid gap-16 lg:grid-cols-1 ">

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg border border-yellow-400 ">
          <div>
            <img
              src="https://i.ibb.co/cg6LXfY/sql-vs-no-sql-1.png"
              className="object-cover w-full  rounded"
              alt=""
            />
          </div>
          <div className="py-5 px-3">
            <p className="text-2xl font-bold leading-5 my-3">Difference between SQL and NoSQL ?</p>
            <p className="mb-4 text-gray-700">
              SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br /> <br />
              SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.
              <br /><br />
              These databases are commonly called NoSQL. SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.

            </p>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white border rounded-lg border-yellow-400">
          <div>
            <img
              src="https://i.ibb.co/GTrDS6v/JWT.jpg"
              className="object-cover w-full  rounded"
              alt=""
            />
          </div>
          <div className="py-5 px-3">
            <p className="text-2xl font-bold leading-5 my-3">What is JWT, and how does it work ?</p>
            <p className="mb-4 text-gray-700">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br /><br />
              Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key. <br /><br />
              JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
            </p>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded border border-yellow-400">
          <div>
            <img
              src="https://i.ibb.co/2Zdmz1x/da529fbd81.png"
              className="object-cover w-full  rounded"
              alt=""
            />
          </div>
          <div className="py-5 px-3">
            <p className="text-2xl font-bold leading-5 my-3">
              What is the difference between javascript and NodeJS ?
            </p>
            <p className="mb-4 text-gray-700">
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br /><br />
              Both of these are used for programming. But there is a significant difference between Node.JS and Javascript. JavaScript (abbreviated as JS) is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages. The Node.JS, on the other hand, helps in representing a list of all the methods and objects that the JavaScript code can access when run via node interpreters or in the V8 engine.
            </p>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg border border-yellow-400">
          <div>
            <img
              src="https://i.ibb.co/NZkSN2r/download-1.jpg"
              className="object-cover w-full  rounded"
              alt=""
            />
          </div>
          <div className="py-5 px-3">
            <p className="text-2xl font-bold leading-5 my-3">
              How does NodeJS handle multiple requests at the same time ?
            </p>
            <p className="mb-4 text-gray-700">
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. <br /><br />
              Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations. As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order.
            </p>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Blogs;