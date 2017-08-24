import React from 'react';
import {children, optional, once} from '../Composite';
import Label from '../Label';
import AutoComplete from '../AutoComplete';
import InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';

import {SBStateless as sbstateless} from 'stylable-react-component';
import styles from './AutoCompleteComposite.st.css';

const AutoCompleteComposite = ({...props, children}) => (
  <InputAreaWithLabelComposite {...props}>
    {children}
  </InputAreaWithLabelComposite>
);

AutoCompleteComposite.propTypes = {
  children: children(optional(Label), once(AutoComplete))
};

AutoCompleteComposite.displayName = 'AutoCompleteComposite';

const StylableAutoCompleteComposite = sbstateless(AutoCompleteComposite, styles);
StylableAutoCompleteComposite.propTypes = AutoCompleteComposite.propTypes;
StylableAutoCompleteComposite.displayName = AutoCompleteComposite.displayName;
export default StylableAutoCompleteComposite;
