/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Definition of the dsc node type.
 *
 * @extends models['Resource']
 */
class DscNode extends models['Resource'] {
  /**
   * Create a DscNode.
   * @member {date} [lastSeen] Gets or sets the last seen time of the node.
   * @member {date} [registrationTime] Gets or sets the registration time of
   * the node.
   * @member {string} [ip] Gets or sets the ip of the node.
   * @member {string} [accountId] Gets or sets the account id of the node.
   * @member {object} [nodeConfiguration] Gets or sets the configuration of the
   * node.
   * @member {string} [nodeConfiguration.name] Gets or sets the name of the dsc
   * nodeconfiguration.
   * @member {string} [status] Gets or sets the status of the node.
   * @member {string} [nodeId] Gets or sets the node id.
   * @member {string} [etag] Gets or sets the etag of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DscNode
   *
   * @returns {object} metadata of DscNode
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DscNode',
      type: {
        name: 'Composite',
        className: 'DscNode',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          lastSeen: {
            required: false,
            serializedName: 'lastSeen',
            type: {
              name: 'DateTime'
            }
          },
          registrationTime: {
            required: false,
            serializedName: 'registrationTime',
            type: {
              name: 'DateTime'
            }
          },
          ip: {
            required: false,
            serializedName: 'ip',
            type: {
              name: 'String'
            }
          },
          accountId: {
            required: false,
            serializedName: 'accountId',
            type: {
              name: 'String'
            }
          },
          nodeConfiguration: {
            required: false,
            serializedName: 'nodeConfiguration',
            type: {
              name: 'Composite',
              className: 'DscNodeConfigurationAssociationProperty'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          nodeId: {
            required: false,
            serializedName: 'nodeId',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DscNode;