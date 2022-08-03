const nodeEnvchecker = require("node-envchecker");

const swaggerDocument = {
  swagger: "2.0",
  info: {
    description:
      "This is the 911Switch APIs to demonstrate Swagger Documentation",
    version: "2.0",
    title: "911Switch API DOC",
    contact: {
      email: "smarteye0701@gmail.com",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },  
  host: "18.216.88.143",
  basePath: "/api",
  schemes: ["http"],  
  tags:[
    { name: "auth",
      description: "Everything about authorization"
    },
    { name: "profile",
      description: "Manage user's profile"
    },
    { name: "switch",
    description: "Manage Switch configuration"
    },
    { name: "contact",
      description: "Manage Emergency Contact"
    },
  ],
  paths: {
    // Auth APIs
    "/auth/register": {
      post: {
        tags: ["auth"],
        summary: "",
        description: "Register the user.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "first_name",
            in: "query",
            description: "full name of user",
            type: "String",
          },
          {
            name: "mobile",
            in: "query",
            required: true,
            type: "string",
            default: "1234567891"
          },
          {
            name: "email",
            in: "query",
            required: true,
            type: "string",
            default: "tester524@gmail.com"
          },
          {
            name: "password",
            in: "query",
            required: true,
            type: "string"
          },
          {
            name: "address",
            in: "query",
            type: "string"
          },
          {
            name: "city",
            in: "query",
            type: "string"
          },
          {
            name: "state",
            in: "query",            
            type: "string"
          },
          {
            name: "zip",
            in: "query",
            type: "string"
          },          
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message": {
                  type: "string"
                },
                "data":{
                  $ref: "#/definitions/User"
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["auth"],
        summary: "",
        description: "Login into the app.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "email",
            in: "query",
            required: true,
            type: "string",
            default: "tester524@gmail.com"
          },
          {
            name: "password",
            in: "query",
            required: true,
            type: "string",
            default: "pass1234"
          },        
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "token": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/auth/google-plus": {
      post: {
        tags: ["auth"],
        summary: "",
        description: "Login into the app with Google.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "query",
            description: "Google User Id",
            type: "String",
          },
          {
            name: "email",
            in: "query",
            required: true,
            type: "string",
            default: "tester525@gmail.com"
          },
          {
            name: "name",
            in: "query",
            required: true,
            type: "string",
            default: "Tester"
          },
          {
            name: "user_role",
            in: "query",
            required: true,
            type: "integer",
            default: 2
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "token": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/auth/facebook": {
      post: {
        tags: ["auth"],
        summary: "",
        description: "Login into the app with Facebook.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "query",
            description: "Facebook User Id",
            type: "String",
          },
          {
            name: "email",
            in: "query",
            required: true,
            type: "string",
            default: "tester526@gmail.com"
          },
          {
            name: "name",
            in: "query",
            required: true,
            type: "string",
            default: "Tester"
          },
          {
            name: "user_role",
            in: "query",
            required: true,
            type: "integer",
            default: 2
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "token": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/auth/apple": {
      post: {
        tags: ["auth"],
        summary: "",
        description: "Login into the app with Apple.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "query",
            description: "Apple User Id",
            type: "String",
          },
          {
            name: "email",
            in: "query",
            required: true,
            type: "string",
            default: "tester527@gmail.com"
          },
          {
            name: "name",
            in: "query",
            required: true,
            type: "string",
            default: "Tester"
          },
          {
            name: "user_role",
            in: "query",
            required: true,
            type: "integer",
            default: 2
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "token": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/auth/reset-password": {
      post: {
        tags: ["auth"],
        summary: "",
        description: "Reset Password.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "email",
            in: "query",
            required: true,
            type: "string",
            default: "tester524@gmail.com"
          },     
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    // Manage Profile APIs
    "/view-profile": {
      post: {
        tags: ["profile"],
        summary: "",
        description: "Get user profile info.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          }, 
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "data":{
                  $ref: "#/definitions/UserInfo"
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/edit-profile": {
      post: {
        tags: ["profile"],
        summary: "",
        description: "Update profile.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "status",
            in: "query",
            required: true,
            type: "boolean",
            default: true            
          },
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "first_name",
            in: "query",
            description: "full name of user",
            type: "String",
          },
          {
            name: "mobile",
            in: "query",
            required: true,
            type: "string",
          },
          {
            name: "address",
            in: "query",
            type: "string"
          },
          {
            name: "city",
            in: "query",
            type: "string"
          },
          {
            name: "state",
            in: "query",            
            type: "string"
          },
          {
            name: "zip",
            in: "query",
            type: "string"
          }, 
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/update-latitude-longitude": {
      post: {
        tags: ["profile"],
        summary: "",
        description: "Updated user's latitude and longitude.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "latitude",
            in: "query",
            description: "latidue of user's location",
            type: "String",
          },
          {
            name: "longitude",
            in: "query",
            required: true,
            type: "string",
          },          
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },    
    "/change-password": {
      post: {
        tags: ["profile"],
        summary: "",
        description: "Change Password.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },   
          {
            name: "old-password",
            in: "query",
            required: true,
            type: "string"
          },
          {
            name: "password",
            in: "query",
            required: true,
            type: "string"
          },
          {
            name: "password_confirmation",
            in: "query",
            required: true,
            type: "string"
          },  
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message": {
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    // Manage Switch APIs
    "/view-switch": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Get all switches.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "status",
            in: "query",
            required: true,
            type: "boolean",
            default: true            
          },
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          }, 
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "data":{
                  type: "array",
                  items: {
                    $ref: "#/definitions/Switch"
                  }                                
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/add-switch": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Add switch.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "status",
            in: "query",
            required: true,
            type: "boolean",
            default: true            
          },
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "serial_no",
            in: "query",
            required: true,
            type: "string",
            default: "FC81475029150024"
          },
          {
            name: "device_name",
            in: "query",
            required: true,
            type: "string",
            default: "Home"
          }
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/alert-switch": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Turn on/off switch.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "serial_no",
            in: "query",
            required: true,
            type: "string",
            default: "FC81475029150024"
          },
          {
            name: "device_name",
            in: "query",
            required: true,
            type: "string",
            default: "Home"
          },
          {
            name: "payload",
            in: "query",
            required: true,
            type: "integer",
            default: 0
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/delete-switch": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Delete switch.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "serial_no",
            in: "query",
            required: true,
            type: "string",
            default: "FC81475029150024"
          },
          {
            name: "device_name",
            in: "query",
            required: true,
            type: "string",
            default: "Home"
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/edit-switch/{switchId}": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Edit switch.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "switchId",
            in: "path",
            required: true,
            type: "string",
            default: "383"
          },
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "serial_no",
            in: "query",
            required: true,
            type: "string",
            default: "FC81475029150024"
          },
          {
            name: "device_name",
            in: "query",
            required: true,
            type: "string",
            default: "Home"
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/default-switch": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Set default switch.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "query",
            required: true,
            type: "integer",
            default: 383
          },
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          }, 
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "data":{
                  type: "array",
                  items: {
                    $ref: "#/definitions/Switch"
                  }                                
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/sms/alert": {
      post: {
        tags: ["switch"],
        summary: "",
        description: "Send sms about turnning on/off switch.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "device",
            in: "query",
            required: true,
            type: "string",
            default: "Home"
          },
          {
            name: "mode",
            in: "query",
            required: true,
            type: "integer",
            default: 1
          },
          {
            name: "location",
            in: "query",
            required: true,
            type: "string",
            default: "Address2"
          }
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    // Manage Emergency contacts APIs
    "/get-contacts": {
      post: {
        tags: ["contact"],
        summary: "",
        description: "Get all contacts.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          }, 
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "data":{
                  type: "array",
                  items: {
                    $ref: "#/definitions/Contact"
                  }                                
                }
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/add-contact": {
      post: {
        tags: ["contact"],
        summary: "",
        description: "Add an emergency contact that exists on user table.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "email",
            in: "query",
            type: "string",
            default: ""
          },
          {
            name: "mobile",
            in: "query",
            required: true,
            type: "string",
            default: "1234567895"
          },
          {
            name: "first_name",
            in: "query",
            required: true,
            type: "string",
            default: "James"
          },
          {
            name: "last_name",
            in: "query",
            type: "string",
            default: ""
          }
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "integer"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/add-contact-noaccount": {
      post: {
        tags: ["contact"],
        summary: "",
        description: "Add an emergency contact that no exist on user table.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          }, 
          {
            name: "mobile",
            in: "query",
            required: true,
            type: "string",
            default: "1234567895"
          },
          {
            name: "first_name",
            in: "query",
            required: true,
            type: "string",
            default: "James"
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "integer"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/delete-contact": {
      post: {
        tags: ["contact"],
        summary: "",
        description: "Delete from emergency contacts.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          },
          {
            name: "record_id",
            in: "query",
            required: true,
            type: "integer",
            default: 428
          },
           
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
    "/sms/invite": {
      post: {
        tags: ["contact"],
        summary: "",
        description: "Send sms for adding emergency contact.",
        produces: ["application/json"],
        consumes: ["application/json"],
        parameters: [
          {
            name: "token",
            in: "query",
            required: true,
            type: "string",
            default: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NCwiaXNzIjoiaHR0cDovLzE4LjIxNi44OC4xNDMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk0MjQ5NzgsImV4cCI6MTY2MzAyNDk3OCwibmJmIjoxNjU5NDI0OTc4LCJqdGkiOiI0Q3FUSFBOQ1BLdGJzM2ppIn0.DESLpxBHswom-CYjvD9ZKmfW8HZmxp9OMJuYp4_r2ms"
          }, 
          {
            name: "id",
            in: "query",
            required: true,
          },
        ],
        responses: {
          "200": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: true
                },
                "message":{
                  type: "string"
                },
              }
            },
          },
          "200: false": {
            schema: {
              type: "object",
              properties: {
                "status":{
                  type: "boolean",
                  default: false
                },
                "errors":{
                  type: "string"
                }
              }
            },
          },
          "400": {
            description: "Invalid status value",
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: "object",
      properties:{
        id: {
          type: "integer"
        },
        email: {
          type: "string"
        },
        mobile: {
          type: "string"
        },
        first_name: {
          type: "string"
        },
        last_name: {
          type: "string"
        },
        address: {
          type: "string"
        },
        city: {
          type: "string"
        },
        state: {
          type: "string"
        },
        zip: {
          type: "string"
        },
        profile_image: {
          type: "string"
        },
        is_active: {
          type: "integer"
        },
        updated_at: {
          type: "string"
        },
        created_at: {
          type: "string"
        }
      }
    },
    UserInfo: {
      type: "object",
      properties:{
        id: {
          type: "integer"
        },
        email: {
          type: "string"
        },
        mobile: {
          type: "string"
        },
        first_name: {
          type: "string"
        },
        last_name: {
          type: "string"
        },
        gender: {
          type: "string"
        },      
        latitude: {
          type: "string"
        },
        longitude: {
          type: "string"
        },  
        date_of_birth: {
          type: "string"
        },
        address: {
          type: "string"
        },
        city: {
          type: "string"
        },
        state: {
          type: "string"
        },
        zip: {
          type: "string"
        },
        profile_image: {
          type: "string"
        },
        is_active: {
          type: "integer"
        },
        is_registered: {
          type: "integer"
        },
        push_platform: {
          type: "string"
        },
        push_key: {
          type: "string"
        },
        country_id: {
          type: "string"
        },
        facebook_id: {
          type: "string"
        },
        google_id: {
          type: "string"
        },
        apple_id: {
          type: "string"
        },
        stripe_customer_id: {
          type: "string"
        },
        stripe_account_id: {
          type: "string"
        },        
        created_at: {
          type: "string"
        },        
        updated_at: {
          type: "string"
        },
        deleted_at: {
          type: "string"
        },
      }
    },
    Switch: {
      type: "object",
      properties:{
        id: {
          type: "integer"
        },
        user_id: {
          type: "integer"
        },
        device_name: {
          type: "string"
        },
        serial_no: {
          type: "string"
        },
        is_active: {
          type: "integer"
        },
        is_default_switch: {
          type: "integer"
        },
        is_on: {
          type: "integer"
        },
        created_at: {
          type: "string"
        },        
        updated_at: {
          type: "string"
        },
        deleted_at: {
          type: "string"
        },      
      }
    },
    Contact: {
      type: "object",
      properties:{
        record_id: {
          type: "integer"
        },
        user_id: {
          type: "integer"
        },
        email: {
          type: "string"
        },
        mobile: {
          type: "string"
        },
        first_name: {
          type: "string"
        },
        last_name: {
          type: "string"
        },
        city: {
          type: "string"
        },
        state: {
          type: "string"
        },
        profile_image: {
          type: "string"
        },
        accepted: {
          type: "integer"
        }
      }
    },
  },
};

module.exports = swaggerDocument;