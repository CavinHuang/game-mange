import { C, DB, G } from '../libs/global'

/** 转换时间格式 */
export const formateDate = (datetime) => {
	function addDateZero(num) {
		return num < 10 ? `0${num}` : num;
	}
	const d = new Date(datetime);
	const formatdatetime = `${d.getFullYear()}-${addDateZero(
		d.getMonth() + 1
	)}-${addDateZero(d.getDate())} ${addDateZero(d.getHours())}:${addDateZero(
		d.getMinutes()
	)}:${addDateZero(d.getSeconds())}`;
	return formatdatetime;
};

/** 处理返回的分页数据 */
export const handlePaging = (nowPage, pageSize, result) => {
	const obj: any = {};
	obj.nowPage = +nowPage;
	obj.pageSize = +pageSize;
	obj.hasMore = obj.nowPage * obj.pageSize - result.count < 0;
	obj.total = result.count;
	return { ...obj, ...result, count: undefined };
};


/**
 * 获取[min,max]之间的随机整数
 * 例如：[10,30],[-21,32],[-100,-20]
 */
export const getRandomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

/** 获取随机字符串 */
export const randomString = (length: number): string => {
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let res = '';
	for (let i = 0; i < length; i += 1) {
		res += str.charAt(getRandomInt(0, str.length - 1));
	}
	return res;
};

/**
 * 获取随机数字字符串
 * length: 长度，不能大于16
 */
export const randomNumber = (length: number): number => {
	const str = Math.random().toString().slice(2);
	const res = +str.slice(str.length - length);
	return res;
};

/**
 * @param code 验证码
 * @param desc 验证码作用
 * @param exp 有效期，单位：秒，但返回时会转换成分钟
 */
export const emailContentTemplate = ({
	code,
	desc,
	exp,
	subject,
}: {
	code: string;
	desc: string;
	exp: number;
	subject?: string;
}) => {
	const subjectTemp = subject || `【${C.name || '博客'}】验证码：${code}`;
	const content = `【${C.name || '博客'}】验证码：${code}，此验证码用于${desc}，有效期${exp / 60
		}分钟，请勿告知他人。`;
	return { subject: subjectTemp, content };
};
