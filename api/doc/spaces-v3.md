<!---
NOTE: this file has been generated by the doc command in js-libjuju
on Fri 2018/11/09 14:32:38 UTC. Do not manually edit this file.
--->
# Spaces v3

API defines the methods the Spaces API facade implements.
This API facade is available on model connections.

To include SpacesV3 capabilities in your client, load it as
part of your facades, for instance:
```javascript
const {conn, logout} = await jujulib.connectAndLogin(url, credentials, {
  facades: [require('jujulib/api/facades/spaces-v3')]
});
```
Facade methods at then accessible at `conn.facades.spaces`.

Go back to [index](index.md).

## Methods
- [createSpaces](#createSpacesargs-callback)
- [listSpaces](#listSpacescallback)
- [reloadSpaces](#reloadSpacescallback)

## createSpaces(args, callback)
There is no documentation for this method.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  spaces: []{
    subnetTags: []string,
    spaceTag: string,
    public: bool,
    providerId: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## listSpaces(callback)
There is no documentation for this method.

- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    name: string,
    subnets: []{
      cidr: string,
      providerId: string,
      providerNetworkId: string,
      providerSpaceId: string,
      vlanTag: int,
      life: string,
      spaceTag: string,
      zones: []string,
      status: string
    },
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## reloadSpaces(callback)
There is no documentation for this method.

- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error or null if the operation succeeded.
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.