import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import SearchBar from "../../Components/Search/SearchBar";
import styleScaled from "./style";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import { bindActionCreators } from "redux";
import * as ControlAppActions from "../../Store/Actions/control-app-actions";
import * as PostAppActions from "../../Store/Actions/post-actions";
import { getAllUser } from "../../Store/Services/user-services";
import ListResultUser from "../../Components/Search/ListResultUser";
import { removeAccents } from "../../Utils/Helpers";
import EmptyView from "../../Components/BaseComponents/EmptyView";


const Search: FC<any> = (props) => {
  const {
    navigation,
    userInfor,
    setBackgroundScreenDrawer,
    color,
    language
  } = props;
  const styles = styleScaled(color);
  const [userList, setUserList] = useState([]);
  const refRootUserList = useRef<Array<any>>([]);
  const refViewShot = useRef();


  useEffect(() => {
    refViewShot.current.capture().then(image => {
      setBackgroundScreenDrawer(image);
    });

    async function getAllData() {
      let dataUser = await getAllUser();
      refRootUserList.current = [...dataUser];
    }

    getAllData();
  }, []);

  const filterUser = useCallback((value) => {
    if (value === "") {
      setUserList([]);
    } else {
      let resultUsers = [];
      resultUsers = [...refRootUserList.current.filter((item) => item.name.toLowerCase().includes(value))];

      value = removeAccents(value);
      resultUsers = [...refRootUserList.current.filter((item) => item.nickname.includes(value)), ...resultUsers];

      resultUsers = resultUsers.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);

      setUserList(resultUsers);
    }
  }, []);

  return (
    <ViewShot ref={refViewShot} style={styles.container} options={{ result: "base64", quality: 0.5 }}>
      <SearchBar language={language} filterUser={filterUser} color={color} navigation={navigation} />

      {/*List user*/}
      {userList.length > 0 ?
        <ListResultUser color={color} data={userList} navigation={navigation} />
        :
        <EmptyView description={language.NO_RESULTS} />}

    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    userInfor: state.user.userInfor,
    color: state.controlApp.settings.color.SEARCH,
    language: state.controlApp.settings.language,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControlAppActions.setBackgroundScreenDrawer, dispatch),
    PostAppDispatchs: bindActionCreators(PostAppActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
