/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import * as React from 'react';

import { FormattedFieldValue } from '../timeline/body/renderers/formatted_field';

export const SOURCE_IP_FIELD_NAME = 'source.ip';
export const DESTINATION_IP_FIELD_NAME = 'destination.ip';

const IP_FIELD_TYPE = 'ip';

/**
 * Renders text containing a draggable IP address (e.g. `source.ip`,
 * `destination.ip`) that contains a hyperlink
 */
export const Ip = React.memo<{
  contextId: string;
  eventId: string;
  fieldName: string;
  value?: string | null;
}>(({ contextId, eventId, fieldName, value }) => (
  <FormattedFieldValue
    contextId={contextId}
    data-test-subj="formatted-ip"
    eventId={eventId}
    fieldName={fieldName}
    fieldType={IP_FIELD_TYPE}
    value={value}
  />
));

Ip.displayName = 'Ip';
