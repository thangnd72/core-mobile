import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { ActionCreators as ContextAction } from "store/context";
import { ActionCreators as AuthAction } from "store/authenticate";
import { ApplicationState } from "store/configureAction";
import styled from "styled-components/native";
import { TextInputUI, Layout, Label, Button } from "components";
import { useFormik } from "formik";
import { FormStage, Row, Stage } from "models/form";
import { LoginUser } from "models/auth";
import { Image } from "react-native";
import { IconImage } from "assets";
import { sizes } from "utils/sizes";

interface State {
  forms?: FormStage[];
  user: LoginUser;
  validationSchema: any;
}
type UIProps = State & typeof ContextAction & typeof AuthAction;

const SignInLayout = (props: UIProps) => {

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: props.validationSchema,
    initialValues: { ...props.user },
    onSubmit: (values: any) => {
      // props.Login(values)
    },
  });
  const errorMessage = (fieldName: string) => {
    if (formik.touched[fieldName] && formik.errors[fieldName]) {
      return formik.errors[fieldName]?.toString();
    }
    return undefined;
  };
  const handleLogin = () => {
    formik.handleSubmit();
  };
  const DisplayForm = () => {
    let form = props.forms?.find((e) => e.stage === Stage.LOGIN);

    if (form) {
      return (
        <WrapperFrom>
          {form?.rows.map((r: Row, i: number) => (
            <>
              {r.controls.map((c, index) => (
                <TextInputUI
                  key={index}
                  placeholder={c.placeholder}
                  uistyle={{ paddingTop: sizes._15sdp }}
                  type={c.type}
                  keyboardType={c.keyboardType}
                  errorMessage={errorMessage(c.fieldName)}
                  textValue={formik.values[c.fieldName]}
                  icon={
                    c.fieldName === "email" ? (
                      <Image
                        style={{
                          width: sizes._20sdp,
                          height: sizes._20sdp,
                        }}
                        resizeMode='contain'
                        source={IconImage.email}
                      />
                    ) : (
                      <Image
                        style={{
                          width: sizes._20sdp,
                          height: sizes._20sdp,
                        }}
                        source={IconImage.lock}
                      />
                    )
                  }
                  onChangeText={(text: string) => {
                    formik.setFieldValue(c.fieldName, text);
                  }}
                />
              ))}
            </>
          ))}
        </WrapperFrom>
      );
    }
    return <></>;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      accessible={false}
    >
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>
          <Layout marginHorizontal={20}>
            <Image
              style={{
                width: sizes._200sdp,
                height: sizes._200sdp,
                marginTop: sizes._80sdp,
                marginBottom: 0,
                alignSelf: "center",
              }}
              source={{
                uri: "https://tiemanhsky.com/wp-content/uploads/2021/03/PHUS7968-Edit-scaled.jpg",
              }}
            />
            {DisplayForm()}
            <Button
              flex
              middle
              centered
              marginTop={sizes._17sdp}
              height={sizes._52sdp}
              borderRadius={sizes._10sdp}
              color={'#000'}
              onPress={handleLogin}
            >
              <Label
                size={15}
                color={"white"}
              >
                Đăng nhập
              </Label>
            </Button>
          </Layout>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
  forms: state.AuthenticateState.forms,
  user: state.AuthenticateState.user,
  validationSchema: state.AuthenticateState.validationSchema,
});
const mapDispatchToProps = {
  ...AuthAction,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SignInLayout as any);

const WrapperFrom = styled.View``;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
