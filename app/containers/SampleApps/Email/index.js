import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { useSelector, useDispatch } from 'react-redux';
import {
  EmailHeader,
  EmailList,
  EmailSidebar,
  ComposeEmail,
  Notification
} from 'dan-components';
import useStyles from 'dan-components/Email/email-jss';
import {
  fetchMailAction,
  openMailAction,
  filterAction,
  composeAction,
  discardAction,
  searchAction,
  sendAction,
  moveAction,
  deleteAction,
  toggleStaredAction,
  closeNotifAction
} from './reducers/emailActions';
import data from './api/emailData';

// validation functions
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : ''
);

function Email() {
  const [field, setField] = useState({
    to: '',
    subject: ''
  });
  const [validMail, setValidMail] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Redux State
  const keyword = useSelector(state => state.email.keywordValue);
  const emailData = useSelector(state => state.email.inbox);
  const currentPage = useSelector(state => state.email.currentPage);
  const openFrm = useSelector(state => state.email.openFrm);
  const messageNotif = useSelector(state => state.email.notifMsg);

  // Dispatcher
  const fetchData = useDispatch();
  const openMail = useDispatch();
  const goto = useDispatch();
  const search = useDispatch();
  const moveTo = useDispatch();
  const remove = useDispatch();
  const toggleStar = useDispatch();
  const compose = useDispatch();
  const discard = useDispatch();
  const sendEmail = useDispatch();
  const closeNotif = useDispatch();

  useEffect(() => {
    fetchData(fetchMailAction(data));
  }, []);

  const handleChange = (event, name) => {
    const { value } = event.target;
    if (name === 'to') {
      setValidMail(email(event.target.value));
    }
    setField(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReply = mail => {
    compose(composeAction);
    setField({
      to: mail.name,
      subject: 'Reply: ' + mail.subject,
    });
  };

  const handleCompose = () => {
    compose(composeAction);
    setField({
      to: ' ',
      subject: ' ',
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { classes } = useStyles();

  const title = brand.name + ' - Email';
  const description = brand.desc;

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
      <Notification close={() => closeNotif(closeNotifAction)} message={messageNotif} />
      <div className={classes.root}>
        <EmailHeader search={(payload) => search(searchAction(payload))} handleDrawerToggle={handleDrawerToggle} />
        <EmailSidebar
          compose={handleCompose}
          goto={(payload) => goto(filterAction(payload))}
          selected={currentPage}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <EmailList
          emailData={emailData}
          openMail={(payload) => openMail(openMailAction(payload))}
          filterPage={currentPage}
          keyword={keyword}
          moveTo={(mail, category) => moveTo(moveAction(mail, category))}
          remove={(payload) => remove(deleteAction(payload))}
          toggleStar={(payload) => toggleStar(toggleStaredAction(payload))}
          reply={handleReply}
        />
      </div>
      <ComposeEmail
        to={field.to}
        subject={field.subject}
        compose={handleCompose}
        validMail={validMail}
        sendEmail={(toPayload, subjectPayload, content, attachment) => sendEmail(sendAction(toPayload, subjectPayload, content, attachment))}
        inputChange={(e, name) => handleChange(e, name)}
        open={openFrm}
        closeForm={() => discard(discardAction)}
      />
    </div>
  );
}

export default Email;
