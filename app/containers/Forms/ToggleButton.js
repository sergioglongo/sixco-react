import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { ToggleBtn } from './demos';

function ToggleButton() {
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="Toggle Buttons" icon="ion-ios-contrast" desc="Toggle buttons can be used to group related options.">
        <div>
          <ToggleBtn />
          <SourceReader componentName={docSrc + 'ToggleBtn.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default ToggleButton;
