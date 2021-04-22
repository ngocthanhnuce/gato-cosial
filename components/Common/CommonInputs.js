import React from "react";
import { Form, Button, Message, TextArea, Divider } from "semantic-ui-react";

const CommonInputs = (props) => {
  const {
    user: {
      bio,
      work,
      relationship,
      address,
      education,
      facebook,
      instagram,
      youtube,
      twitter,
    },
    handleChange,
    showSocialLinks,
    setShowSocialLinks,
  } = props;
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />
       <Form.Field
        required
        control={TextArea}
        name="work"
        value={work}
        onChange={handleChange}
        placeholder="work"
      />
       <Form.Field
        required
        control={TextArea}
        name="relationship"
        value={relationship}
        onChange={handleChange}
        placeholder="relationship"
      />
       <Form.Field
        required
        control={TextArea}
        name="address"
        value={address}
        onChange={handleChange}
        placeholder="address"
      />
       <Form.Field
        required
        control={TextArea}
        name="education"
        value={education}
        onChange={handleChange}
        placeholder="education"
      />
      <Button
        content="Add Social Links"
        color="red"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />
      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon="facebook f"
            iconPosition="left"
            name="facebook"
            value={facebook}
            onChange={handleChange}
          />
          <Form.Input
            icon="twitter"
            iconPosition="left"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />
          <Form.Input
            icon="instagram"
            iconPosition="left"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />
          <Form.Input
            icon="youtube"
            iconPosition="left"
            name="youtube"
            value={youtube}
            onChange={handleChange}
          />
          <Message
            icon="attention"
            info
            size="small"
            header="Gato social media link option"
          />
        </>
      )}
    </>
  );
};

export default CommonInputs;
