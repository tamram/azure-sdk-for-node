/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the JobProperties class.
 * @constructor
 * The common Data Lake Analytics job properties.
 * @member {string} [runtimeVersion] Gets or sets the runtime version of the
 * U-SQL engine to use
 * 
 * @member {string} script Gets or sets the U-SQL script to run
 * 
 * @member {string} type Polymorhpic Discriminator
 * 
 */
function JobProperties() {
}

/**
 * Defines the metadata of JobProperties
 *
 * @returns {object} metadata of JobProperties
 *
 */
JobProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JobProperties',
    type: {
      name: 'Composite',
      polymorphicDiscriminator: 'type',
      uberParent: 'JobProperties',
      className: 'JobProperties',
      modelProperties: {
        runtimeVersion: {
          required: false,
          serializedName: 'runtimeVersion',
          type: {
            name: 'String'
          }
        },
        script: {
          required: true,
          serializedName: 'script',
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = JobProperties;