import React from "react";
import { Alert } from "@material-ui/lab";
import ParamTable from "components/ParamTable";

export default function() {
    const param1 = [
        { name: "recipient", type: "必填，字符串", desc: "接收人，手机号或电子邮箱" },
        { name: "clientId", type: "必填，字符串", desc: "你的应用ID" },
        { name: "clientSecret", type: "必填，字符串", desc: "你的应用Secret" },
        {
            name: "code",
            type: "可选，字符串",
            desc: "使用你生成的验证码，而不是由唯ID生成，4~8个英文字母、数字"
        },
        { name: "expireMin", type: "可选，整数", desc: "验证码有效期（分钟），要 >= 1 且 <= 20" },
        {
            name: "template",
            type: "可选，整数",
            desc: (
                <>
                    验证码模板，要 >= 1 且 &lt;= 4
                    <ol style={{ paddingLeft: "1em" }}>
                        <li>APP的验证码为：Y，该验证码X分钟内有效，请勿泄露于他人</li>
                        <li>
                            (Y)APP验证码。工作人员不会向您索要，请勿向任何人泄露，以免造成账户或资金损失
                        </li>
                        <li>您的验证码是：Y。此验证码用于[APP]，有效期X分钟</li>
                        <li>(Y)APP验证码，X分钟内有效</li>
                    </ol>
                    其中，APP指代你的应用名，X是有效期，Y是验证码，发送时会替换成具体的值。
                </>
            )
        },
        {
            name: "maxFailCount",
            type: "可选，整数",
            desc:
                "最多失败次数，要 >= 1 且 <= 20。达到该值后，标记验证码失效，后续校验都直接返回失败，不再尝试校验"
        },
        {
            name: "reuse",
            type: "可选，布尔值",
            desc:
                "是否重用。当发送给某用户的一条验证码未过期时再发送一条，会重用前一条验证码，并更新有效期，可以避免用户在短时间收到多条不一样的验证码"
        }
    ];

    const param2 = [
        { name: "recipient", type: "字符串", desc: "接收人回显，可忽略" },
        { name: "code", type: "字符串", desc: "验证码" },
        { name: "createDate", type: "时间字符串", desc: "创建时间" },
        { name: "expireDate", type: "时间字符串", desc: "过期时间" },
        { name: "maxFailCount", type: "整数", desc: "最大失败次数" }
    ];

    const param3 = [
        { name: "recipient", type: "必填，字符串", desc: "接收人，手机号或电子邮箱" },
        { name: "clientId", type: "必填，字符串", desc: "你的应用ID" },
        { name: "clientSecret", type: "必填，字符串", desc: "你的应用Secret" },
        { name: "code", type: "必填，字符串", desc: "尝试比对的验证码" }
    ];

    const param4 = [{ name: "result", type: "字符串", desc: "校验结果，固定值：success" }];

    return (
        <>
            <h1>使用</h1>
            <Alert severity="info">
                如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
            </Alert>
            <h2>发送验证码</h2>
            <p>接口描述：发送验证码到指定手机号、邮箱</p>
            <p>接口地址：https://www.onlyid.net/api/open/send-otp</p>
            <p>请求方式：POST</p>
            <p>内容类型：application/json</p>
            <p>请求参数：</p>
            <ParamTable data={param1} />
            <p>成功时响应字段：</p>
            <ParamTable data={param2} type="response" />
            <p>请求示例：</p>
            <pre className="pre1">
                <span className="color1">POST </span>
                https://www.onlyid.net/api/open/send-otp
                <br />
                <span className="color2">Content-Type</span>: application/json
                {`
{
    "recipient": "13612345678",
    "clientId": "07c9770f22b1460398d44b4a3543db79",
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e"
}`}
            </pre>
            <p>验证码发送成功，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 200</span>
                {`
{
    "recipient": "13612345678",
    "code": "581305",
    "createDate": "2021-01-05T19:45:30",
    "expireDate": "2021-01-05T19:55:30",
    "maxFailCount": 10
}`}
            </pre>
            <p>验证码发送失败，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 400</span>
                {`
{
    "error": "应用不存在或Client ID错误，请检查"
}`}
            </pre>
            <Alert severity="info">
                唯ID所有Open
                API，请求成功返回HTTP状态码200，请求失败返回40X（一般是400），然后通过error字段给出具体错误原因。
            </Alert>
            <h3>自定义设置</h3>
            <p>
                默认发送的验证码是6位数字，你可以自定义包括长度、类型、短信模板在内的选项，以更符合你的应用需求。有两种方式：
            </p>
            <ol>
                <li>通过API传参的方式自定义，请见上文的请求参数表格。</li>
                <li>登录控制台 -> 应用管理 -> OTP 验证码设置 自定义。</li>
            </ol>
            <p>注意：</p>
            <ul>
                <li>通过API传参的方式自定义的优先级比控制台更高。</li>
                <li>
                    当请求参数code有值时，会认为是一条新的验证码，即使reuse为true，也不再尝试重用未过期验证码。
                </li>
            </ul>
            <h2>校验验证码</h2>
            <Alert severity="warning">
                尽管发送接口返回了验证码（code），让自行校验成为可能，我们仍建议你调用校验接口完成校验，以保证安全性。
            </Alert>
            <p>接口描述：校验短信、邮箱验证码是否正确</p>
            <p>接口地址：https://www.onlyid.net/api/open/verify-otp</p>
            <p>请求方式：POST</p>
            <p>内容类型：application/json</p>
            <p>请求参数：</p>
            <ParamTable data={param3} />
            <p>成功时响应字段：</p>
            <ParamTable data={param4} type="response" />
            <p>请求示例：</p>
            <pre className="pre1">
                <span className="color1">POST </span>
                https://www.onlyid.net/api/open/verify-otp
                <br />
                <span className="color2">Content-Type</span>: application/json
                {`
{
    "recipient": "13612345678",
    "clientId": "07c9770f22b1460398d44b4a3543db79",
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e",
    "code": "581305"
}`}
            </pre>
            <p>验证码校验成功，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 200</span>
                {`
{
    "result": "success"
}`}
            </pre>
            <p>验证码校验失败，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 400</span>
                {`
{
    "error": "验证码错误或超过有效期"
}`}
            </pre>
            <p>验证码失效规则：</p>
            <ul>
                <li>成功验证过一次后立即失效。</li>
                <li>验证失败次数达到限制立即失效。</li>
                <li>验证码超时未完成验证自然过期。</li>
                <li>生成了新验证码后，旧验证码（即使未过期）自动失效。</li>
            </ul>
        </>
    );
}
