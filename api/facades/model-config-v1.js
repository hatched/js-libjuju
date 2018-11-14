/**
  Juju ModelConfig version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Fri 2018/11/09 14:32:38 UTC. Do not manually edit this file.
*/

'use strict';

const {createAsyncHandler} = require('../transform.js');

/**
  ModelConfigAPIV1 hides V2 functionality
*/
class ModelConfigV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;
  }

  /**
    ModelGet implements the server-side part of the model-config CLI command.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          config: map[string]{
            value: anything,
            source: string
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  modelGet(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'ModelConfig',
        request: 'ModelGet',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#ModelConfigResults
        if (resp) {
          result = {};
          result.config = {};
          resp['config'] = resp['config'] || {};
          for (let k in resp['config']) {
            // github.com/juju/juju/apiserver/params#ConfigValue
            if (resp['config'][k]) {
              result.config[k] = {};
              result.config[k].value = resp['config'][k]['value'];
              result.config[k].source = resp['config'][k]['source'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    ModelSet implements the server-side part of the set-model-config CLI
    command.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          config: map[string]anything
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  modelSet(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#ModelSet
      if (args) {
        params = {};
        params['config'] = {};
        args.config = args.config || {};
        for (let k in args.config) {
          params['config'][k] = args.config[k];
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'ModelConfig',
        request: 'ModelSet',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    ModelUnset implements the server-side part of the set-model-config CLI
    command.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          keys: []string
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  modelUnset(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#ModelUnset
      if (args) {
        params = {};
        params['keys'] = [];
        args.keys = args.keys || [];
        for (let i = 0; i < args.keys.length; i++) {
          params['keys'][i] = args.keys[i];
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'ModelConfig',
        request: 'ModelUnset',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    SLALevel returns the current sla level for the model.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          },
          result: string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  slaLevel(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'ModelConfig',
        request: 'SLALevel',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#StringResult
        if (resp) {
          result = {};
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
          result.result = resp['result'];
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    SetSLALevel sets the sla level on the model.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          modelslainfo: {
            level: string,
            owner: string
          },
          creds: []int
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  setSLALevel(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#ModelSLA
      if (args) {
        params = {};
        // github.com/juju/juju/apiserver/params#ModelSLAInfo
        if (args.modelslainfo) {
          params['ModelSLAInfo'] = {};
          params['ModelSLAInfo']['level'] = args.modelslainfo.level;
          params['ModelSLAInfo']['owner'] = args.modelslainfo.owner;
        }
        params['creds'] = [];
        args.creds = args.creds || [];
        for (let i = 0; i < args.creds.length; i++) {
          params['creds'][i] = args.creds[i];
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'ModelConfig',
        request: 'SetSLALevel',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapModelConfig) {
  // Decorate the facade class in order to improve user experience.
  ModelConfigV1 = wrappers.wrapModelConfig(ModelConfigV1);
}

module.exports = ModelConfigV1;