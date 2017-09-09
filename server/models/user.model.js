const UserModel = {
    "type": "object",
    "properties": {
        "cell": {
          "type": "string"
        },
        "_id": {
            "type": "string"
        }, 
        "dob": {
          "type": "string"
        }, 
        "email": {
          "type": "string"
        }, 
        "gender": {
          "type": "string"
        }, 
        "location": {
          "properties": {
            "city": {
              "type": "string"
            }, 
            "postcode": {
              "type": "integer"
            }, 
            "state": {
              "type": "string"
            }, 
            "street": {
              "type": "string"
            }
          }, 
          "type": "object"
        }, 
        "login": {
          "properties": {
            "md5": {
              "type": "string"
            }, 
            "password": {
              "type": "string"
            }, 
            "salt": {
              "type": "string"
            }, 
            "sha1": {
              "type": "string"
            }, 
            "sha256": {
              "type": "string"
            }, 
            "username": {
              "type": "string"
            }
          }, 
          "type": "object"
        }, 
        "name": {
          "properties": {
            "first": {
              "type": "string"
            }, 
            "last": {
              "type": "string"
            }, 
            "title": {
              "type": "string"
            }
          }, 
          "type": "object"
        }, 
        "nat": {
          "type": "string"
        }, 
        "phone": {
          "type": "string"
        }, 
        "picture": {
          "properties": {
            "large": {
              "type": "string"
            }, 
            "medium": {
              "type": "string"
            }, 
            "thumbnail": {
              "type": "string"
            }
          }, 
          "type": "object"
        }, 
        "registered": {
          "type": "string"
        }
    }
}
export default UserModel;