<style lang="scss" >
.seting-menu {
  position: relative;
  float: left;
  .set-icon {

    // background: url("./images/set.png") no-repeat;

    float: left;
    cursor: pointer;
    i.iconfont {
      font-size: 16px;
    }
  }
  .menu-list {
    width: 94px;
    position: absolute;
    right: -7px;
    border-radius: 3px;
    top: 50px;
    z-index: 10;
    padding: 8px 0;
    @include font_color('white65');
    font-size: 14px; 
    @include background_color('sideBg');
    li {
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      text-align: center;
      i {
        font-size: 16px;
      }
      &:hover {
         background: rgba($color: #1D84EF, $alpha: 0.1);
        color: #1D84EF;
      }
      &:first-child {
        &::before {
          content: "";
          position: absolute;
          right: 14%;
          top: -6px;
          width: 0;
          height: 0;
          border-left: 6px solid rgba(255, 255, 255, 0);
          border-right: 6px solid rgba(255, 255, 255, 0);
          border-bottom: 6px solid #fff;
          border-bottom-color: $sideBg;
        }
      }
    }
  }

  // 修改密码弹层
  .edit_password_dialog {
    background: #fff;
    color: #092266;
    .el-dialog__header {
      border-bottom: 1px solid #e5e5e5;
      background: #ECEFF7;
    }
    .form-group {
     color: #092266;
    }
    .el-dialog__footer {
      border-top: 1px solid #e5e5e5;
    }
  }
}


// 修改密码弹层
  .edit_password_dialog {
    border-radius: 6px;
    overflow: hidden;
    .el-dialog__header {
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      text-align: left;
      .el-dialog__title {
        font-size: 14px;
        color: #092266;
      }
    }
    .el-dialog__headerbtn {
      right: 6px;
      top: 6px;
      font-size: 23px;
    }
    .form-group {
      display: flex;
      height: 32px;
      margin-bottom: 10px;
      label {
        width: 80px;
        text-align: right;
        margin-right: 10px;
        color:#092266;
        line-height: 32px;
      }
      .el-input {
        width: auto;
        float: left;
        .el-input__inner {
          float: left;
        }
      }
    }
    .el-dialog__body {
      padding: 15px;
    }
    .el-dialog__footer {
      padding: 0;
    }
    .blue_btn {
      width: auto;
    }
  }
</style>


<template>
  <div class="seting-menu  ">
    <div class="set-icon"
         v-clickoutside="handleClose"
         @click="logout">
         <i class="iconfont">&#xe608;</i>
         </div>
    <ul v-if="false" class="menu-list white_shadow"
        v-show="isShow">
      <!-- <li>{{userName}}</li> -->
      <li class="password"
          @click="dialogVisible = true"><i class="iconfont">&#xe6b7;</i>密码修改</li>
      <!-- <li class="change-theme"
          @click="changeTheme">皮肤切换</li> -->
      <li class="logout"
          @click="logout"><i class="iconfont">&#xe607;</i>退出登录</li>
    </ul>
    <el-dialog title="密码修改"
               :visible.sync="dialogVisible"
               width="315px"
               :modal-append-to-body="false"
               :center="true"
               custom-class="edit_password_dialog"
               :before-close="handleBeforeClose">
      <form
            id="pwdChgForm">
        <div class="form-group">
          <label>原始密码</label>
          <el-input @input="getOldPassword"
                    type='password'
                    v-model="oldPassword">
          </el-input>
        </div>
        <div class="form-group">
          <label>新密码</label>
          <el-input type='password'
                    @input="getNewPassword"
                    v-model="newPassword">
          </el-input>
        </div>
        <div class="form-group">
          <label>确认新密码</label>
          <el-input type='password'
                    @input="getConfirmPassword"
                    v-model="confirmPassword">
          </el-input>
        </div>
      </form>
      <span slot="footer"
            class="dialog-footer">
        <el-button class="blue_btn"
                   @click="changePwd">确认修改</el-button>
        <el-button  class="white_btn"
                   @click="handleCancel">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import clickoutside from 'element-ui/src/utils/clickoutside'
export default {
  data() {
    return {
      themeb: "blue",
      isShow: false,
      dialogVisible: false,
      // 密码修改值
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },
  props: {
    logout: Function,
    requestChangePwd: Function,
    userName: String
  },
  directives: { clickoutside },
  methods: {
    handleCancel() {
      this.dialogVisible = false
      // 清空密码
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
    handleBeforeClose() {
      this.dialogVisible = false
    },
    /*
     * 关闭下拉框
     */
    handleClose() {
      this.isShow = false;
    },
    /*
     * 设置点击事件
     */
    setEvent() {
      this.isShow = !this.isShow;
    },
    /*
     * 修改密码
     */
    changePwd() {
      let self = this;
      if (self.validateForm() == true) {
        let pramas = {
          oldpass: self.oldPassword,
          newpass: self.newPassword
        };
        // 调用修改密码的方法
        if (self.requestChangePwd(pramas)) {
          self.dialogVisible = false;
        }
      }
    },
    /**
     * 皮肤切换
     */
    changeTheme() {
      let theme = localStorage.getItem("skinStyle");
      switch (theme) {
        case "blue":
          localStorage.setItem("skinStyle", "green");
          break;
        case "green":
          localStorage.setItem("skinStyle", "blue");
          break;
        default:
          localStorage.setItem("skinStyle", "blue");
          break;
      }
      theme = localStorage.getItem("skinStyle");
      document.getElementsByTagName("body")[0].className = `theme-${theme}`;
      // $('body').attr('class', `theme-${theme}`)
      this.$store.commit("themeChange", theme);
    },
    /*
     * 验证表单字段是否为空
     */
    validateForm() {
      const { oldPassword, newPassword, confirmPassword } = this;
      // 旧密码验证
      if (_.isEmpty(oldPassword)) {
        this.messagePopup("请输入原始密码!");
        return false;
      }
      if (!this.validatePwd(newPassword)) {
        return false;
      }
      // 新密码验证
      if (_.isEmpty(newPassword) || _.isEmpty(confirmPassword)) {
        this.messagePopup("新密码或者确认密码不能为空!");
        return false;
      } else {
        if (newPassword !== confirmPassword) {
          this.messagePopup("新密码与确认密码不一致，请确认!");
          return false;
        }
        return true;
      }
    },
    validatePwd(pwd) {
      if (_.isEmpty(pwd)) {
        this.messagePopup("请输入新密码");
        return false;
      }
      let reg = /^(?=.*[A-Z])(?=.*\d)[^]{8,50}$/;
      if (!reg.test(pwd)) {
        this.messagePopup(
          "密码格式不对，长度为8-50位，且必须包含大写字母和数字"
        );
        return false;
      }
      return true;
    },
    /**提示框 */
    messagePopup(text) {
      this.$message({
        message: text,
        // duration: 0, // 0 不关闭弹窗
        center: true,
        type: ""
      });
    },
    /**旧密码*/
    getOldPassword(value) {
      this.oldPassword = value;
    },
    /** 用户名密码 */
    getNewPassword(value) {
      this.newPassword = value;
    },
    /**验证码 */
    getConfirmPassword(value) {
      this.confirmPassword = value;
    },
    /**提示框 */
    messagePopup(text) {
      this.$message({
        message: text,
        duration: 1500, // 0 不关闭弹窗
        center: true,
        type: ""
      });
    }
  }
};
</script>



