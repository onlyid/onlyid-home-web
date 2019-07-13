<template>
    <div>
        <div id="banner">关于唯ID</div>
        <div class="section">
            <p class="section-title">团队介绍</p>
            <p class="subsection-title">核心团队</p>
            <p>核心团队成员直接参与项目的贡献，长期维护唯ID的各个子项目。</p>
            <div style="display: flex; justify-content: space-between">
                <team-member name1="梁庭宾" in-charge-of="项目发起人，负责唯ID所有子项目开发、协调、管理" good-at="js & java；web前端 & android & 后台">
                    <img src="@/assets/team-member-ltb.png">
                </team-member>
                <!--<team-member name1="梁庭宾" in-charge-of="项目发起人，负责唯ID所有子项目开发、协调、管理" good-at="js & java；web前端 & android & 后台">-->
                    <!--<img src="@/assets/team-member-ltb.png">-->
                <!--</team-member>-->
            </div>
            <p class="subsection-title">社区伙伴</p>
            <p>这些社区的小伙伴，经常关注唯ID的发展，提过很多宝贵的意见，有些还贡献过代码，真的很感谢他们。</p>
            <div style="display: flex; justify-content: space-between">
                <team-member name1="赵耀" in-charge-of="特别顾问" good-at="js全栈 & haskell">
                    <img src="@/assets/team-member-zy.jpg">
                </team-member>
            </div>
        </div>
        <div class="section" id="join">
            <p class="section-title">加入我们</p>
            <p style="margin-top: 40px;">如你所见，唯ID现在还处于非常原始的阶段，需要你的帮助！</p>
            <p>不论是贡献代码、报告bug还是产品设计、美工UI又或者只是帮忙宣传、提一些简单意见，都非常欢迎，下方有我的联系方式，期待认识你 ^_^</p>
        </div>
    </div>
</template>

<script>
import TeamMember from '@/components/about/TeamMember'

export default {
  components: { TeamMember }
}
</script>

<style scoped>
    .subsection-title {
        margin-top: 40px;
        font-size: 21px;
    }
</style>
