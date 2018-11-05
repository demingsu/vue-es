/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

<script>
    export default {
        methods: {
            validateUserLogin() {
                try {
                    let user = JSON.parse(sessionStorage.getItem("current_login_user_info") || "{}");
                    return !!user.id && !!user.name;
                } catch (e) {
                    return false;
                }
            },
            handleErrorMessage(error, loading) {
                if (!!loading) loading.close();
                this.$message({message: error.message || "服务器错误，请重试"});
            }
        }
    }
</script>