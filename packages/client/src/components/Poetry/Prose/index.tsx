import cls from 'classnames';
import React, { useMemo, useRef, useState } from 'react';

const shouCangIcon = '/assets/images/shou-cang.png';
const shouCangOkIcon = '/assets/images/shou-cangok.png';
const yiPicIcon = '/assets/images/yi-pic.png';
const yiPicOkIcon = '/assets/images/yi-pic2.png';
const zhuPicIcon = '/assets/images/zhu-pic.png';
const zhuPicOkIcon = '/assets/images/zhu-pic2.png';
const shangPicIcon = '/assets/images/shang-pic.png';
const shangPicOkIcon = '/assets/images/shang-pic2.png';
const yinPicIcon = '/assets/images/yin-pic.png';
const yinPicOkIcon = '/assets/images/yin-pic2.png';

import style from './index.module.scss';

export const Prose = () => {
  const contRef = useRef(null);
  const [tags, setTags] = useState(['梅花', '品格', '喻人', '咏梅']);
  const [yi, setYi] = useState(false);
  const [zhu, setZhu] = useState(false);
  const [shang, setShang] = useState(false);
  const [yin, setYin] = useState(false);
  const [isCollect, setCollect] = useState(false);

  // 默认诗文
  const isShowDefault = useMemo(() => {
    return !yi && !zhu && !shang && !yin;
  }, [yi, zhu, shang, yin]);
  // 收藏
  const handleCollect = () => {
    setCollect(!isCollect);
  };
  // 复制;
  const handleCopy = () => {
    if (contRef.current) {
      const text = `${contRef.current.textContent} --${window.location.href}`; // 获取文本内容，自动过滤掉标签
      console.log(text);
      navigator.clipboard.writeText(text);
      alert('已复制到剪贴板，快去分享吧~');
    }
  };
  //译
  const handleYi = () => {
    setYi(!yi);
    setZhu(false);
    setShang(false);
    setYin(false);
  };
  //注
  const handleZhu = () => {
    setZhu(!zhu);
    setYi(false);
    setShang(false);
    setYin(false);
  };
  //赏
  const handleShang = () => {
    setShang(!shang);
    setZhu(false);
    setYi(false);
    setYin(false);
  };
  //音
  const handleYin = () => {
    setYin(!yin);
    setZhu(false);
    setShang(false);
    setYi(false);
  };
  return (
    <div className={cls(style.wrapper)}>
      <div className={style.prose}>
        <h2 className={style.name}>高阳台·落梅</h2>
        <p className={style.origin}>
          <a className={style.author}>
            <img src="" alt="" />
            吴文英
          </a>
          <a className={style.dynasty}>〔宋代〕</a>
        </p>
        {isShowDefault && (
          <div className={style.cont} ref={contRef}>
            宫粉雕痕，仙云堕影，无人野水荒湾。古石埋香，金沙锁骨连环。南楼不恨吹横笛，恨晓风、千里关山。半飘零，庭上黄昏，月冷阑干。
            <br />
            寿阳空理愁鸾。问谁调玉髓，暗补香瘢。细雨归鸿，孤山无限春寒。离魂难倩招清些，梦缟衣、解佩溪边。最愁人，啼鸟清明，叶底青圆。
          </div>
        )}

        {/* 译 */}
        {yi && (
          <div className={style.cont}>
            <p>
              宫粉雕痕，仙云堕影，无人野水荒湾。古石埋香，金沙锁骨连环。南楼不恨吹横笛，恨晓风、千里关山。半飘零，庭上黄昏，月冷阑干。{' '}
              <br />
              <span className={style.yiText}>
                宛如宫女脂粉残留的秀痕，仿佛云间仙子飘坠下的倩影。一树新梅，南放在野水荒湾。古石下埋藏你芳香的遗骨，金沙滩葬着她的连环锁骨。不恨南楼的横笛吹奏起《梅花落》的笛曲，声声幽怨哀伤。但我更恨的是早晨的和风吹遍万水掠过千山，梅花被吹得飘零片片。香气在黄昏的庭院中扩散，幽冷的月光下梅花的疏影摇曳翩翩。
                <br />
              </span>
            </p>
            <p>
              寿阳空理愁鸾。问谁调玉髓，暗补香瘢。细雨归鸿，孤山无限春寒。离魂难倩招清些，梦缟衣、解佩溪边。最愁人，啼鸟清明，叶底青圆。{' '}
              <br />
              <span className={style.yiText}>
                寿阳公主空对着宝镜弥补脸上痕瘢，悄悄地妆饰姣好的容颜。试问有谁调匀玉髓，来悄悄修补香艳的痕斑？潇潇细雨中归鸿不断，翩翩飞远，无边无际的春寒，还笼罩着那种满梅花的孤山。远去的幽魂请谁才能招还，只能在梦境中与你在溪边想见。你穿着洁白的衣裙，解下玉佩赠给我作为留念。最令人忧愁的是，当梅雨过去而变成晴天，小鸟在梅树间啼叫连连，浓密的叶片下，点点梅子已又清又圆。{' '}
                <br />
              </span>
            </p>
          </div>
        )}
        {/* 注 */}
        {zhu && (
          <div className={style.cont}>
            <p>
              宫粉雕痕，仙云<span className={style.zhuText}>¹</span>堕影，无人野水荒湾。古石埋香
              <span className={style.zhuText}>²</span>，金沙锁骨连环。南楼不恨吹横笛
              <span className={style.zhuText}>³</span>，恨晓风、千里关山。半飘零，庭上黄昏，月冷阑
              <span className={style.zhuText}>(lán)</span>干。 <br />
              <span className={style.zhuText}>
                ¹仙云：状梅花飘落姿影。²古石埋香：原指美人死去。此处喻指落梅。³吹横笛：古笛曲中有《梅花落》。
              </span>
            </p>
            <p>
              寿阳<span className={style.zhuText}>¹</span>空理愁鸾。问谁调玉髓
              <span className={style.zhuText}>(suǐ)</span>，暗补香瘢<span className={style.zhuText}>(bān)</span>
              <span className={style.zhuText}>²</span>。细雨归鸿，孤山无限春寒。离魂难倩招清些，梦缟
              <span className={style.zhuText}>(gǎo)</span>衣<span className={style.zhuText}>³</span>
              、解佩溪边。最愁人，啼鸟清明，叶底青圆。 <br />
              <span className={style.zhuText}>¹寿阳：化用寿阳公主梅花妆事。²瘢：疤痕。³缟衣：白绢衣裳。</span>
            </p>
          </div>
        )}
        {/* 赏 */}
        {shang && (
          <div className={style.cont}>
            宫粉雕痕，仙云堕影，无人野水荒湾。古石埋香，金沙锁骨连环。南楼不恨吹横笛，恨晓风、千里关山。半飘零，庭上黄昏，月冷阑干。{' '}
            <br />
            寿阳空理愁鸾。问谁调玉髓，暗补香瘢。细雨归鸿，孤山无限春寒。离魂难倩招清些，梦缟衣、解佩溪边。最愁人，啼鸟清明，叶底青圆。{' '}
            <div className={style.hr}></div>
            <p>此文为吴文英在一妻一妾都相继去世后为表达自己真挚情感和深深思念所作。</p>
            <p>
              这首词开端即写梅花凋谢“宫粉”状其颜色，“仙云”写其姿质，“雕痕”、“堕影”，言其飘零，字字锤炼，用笔空灵凝炼“无人野水荒湾”句为背景补笔。仙姿绰约、幽韵冷香的梅花，无声地飘落在阒寂的野水荒湾。境界空旷悠远，氛围淡寒。“古石埋香，金沙锁骨连环。”二句，上承“雕”、“堕”，再进一步渲染，由飘落而埋香，至此已申足题面。“金沙锁骨连环”，用美妇人——锁骨菩萨死葬的传说来补足“埋香”之意。黄庭坚《戏答陈季常寄黄州山中连理松枝》诗云：“金沙滩头锁子骨，不妨随俗暂婵娟。”词中用以拟梅花，借指梅花以美艳绝伦之身入世悦人，谢落后复归于清净的本体，受人敬礼，可谓尊爱之至，而哀悼之意亦隐于其中。接下来“南楼不恨吹横笛，恨晓风、千里关山”。三句陡然转折。“不恨”与“恨”对举，词笔从山野落梅的孤凄形象转入关山阻隔的哀伤情怀，隐含是花实际亦复指人之意。笛曲中有《梅花落》。可见，“南楼”句虽然空际转身而仍绾合本题。所以陈洵称赞为“是觉翁（吴文英晚号觉翁）神力独运处”（《海绡说词》）。下边转换空间，由山野折回庭中。“半飘零”三句，当是从林逋《山园小梅》“暗香浮动月黄昏”化出。梅花既落，而又无人月下倚阑赏之，故言“月冷阑干”，与下片“孤山无限春寒”喻意基本相同。下片言“寿阳”，言“孤山”，皆用梅花故实。《太平御览》卷三十《时序部》引《杂五行书》中的记载：“宋武帝女寿阳公主人日卧于含章殿檐下，梅花落公主额上，成五出花，拂之不去，皇后留之，看得几时，经三日，洗之乃落。宫女奇其异，竞效之，今梅花妆是也。”“鸾”是“鸾镜”，为妇女梳妆用镜。“调玉髓”、“补香瘢”，又用三国吴孙和邓夫人的故事。和宠夫人，曾因醉舞如意，误伤邓颊，血流满面，医生说用白獭髓，杂玉与琥珀屑敷之，可灭瘢痕，见唐段成式《酉阳杂俎》前集卷八。这里合寿阳公主理妆之事同说，以“问谁”表示已经没有了落梅为之助妆添色。孤山在今杭州西湖，宋词人林逋曾于此隐居，植梅养鹤，人称“梅妻鹤子”。此处化用数典，另翻新意。分从两方面落笔，先写对逝而不返的落梅的眷恋，再写落梅蓬山远隔的幽索。“离魂”三句，仍与落梅紧紧相扣。“缟衣”与“宫粉”拍合，“溪边”亦与“野水荒湾”呼应。“缟衣解佩”暗指昔日一般情事，寄寓了往事如烟、离魂难招的怀人之思。最后一韵，从题面申展一层，写花落之后的梅树形象。“叶底青圆”四字，化用杜牧《叹花》诗“绿叶成阴子满枝”的词句意，包孕着世事变迁的惆怅与岁月无情的蹉跎。
            </p>
            <p>
              吴文英在苏州时曾纳一妾，后遣去；居于杭州时又纳一妾，后亡故。联系作者的这些经历，并证以其它词章。后人对这首词虽然褒贬不一，但从总体看来，词中那些似乎不相连属的字面的深层，其实流动着脉络贯通的感情潜流，它们从不同的时空和层面，渲染了隐秘的情事和深藏的词旨，堪称咏物之作的佳品。
            </p>
          </div>
        )}
        {/* 音 */}
        {yin && (
          <div className={style.cont}>
            <div className={style.pinyinContson}>
              <span>
                <span className={style.pinyin}>gōng</span>
                <span className={style.hanzi}>宫</span>
              </span>
              <span>
                <span className={style.pinyin}>fěn</span>
                <span className={style.hanzi}>粉</span>
              </span>
              <span>
                <span className={style.pinyin}>diāo</span>
                <span className={style.hanzi}>雕</span>
              </span>
              <span>
                <span className={style.pinyin}>hén</span>
                <span className={style.hanzi}>痕</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>xiān</span>
                <span className={style.hanzi}>仙</span>
              </span>
              <span>
                <span className={style.pinyin}>yún</span>
                <span className={style.hanzi}>云</span>
              </span>
              <span>
                <span className={style.pinyin}>duò</span>
                <span className={style.hanzi}>堕</span>
              </span>
              <span>
                <span className={style.pinyin}>yǐng</span>
                <span className={style.hanzi}>影</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>wú</span>
                <span className={style.hanzi}>无</span>
              </span>
              <span>
                <span className={style.pinyin}>rén</span>
                <span className={style.hanzi}>人</span>
              </span>
              <span>
                <span className={style.pinyin}>yě</span>
                <span className={style.hanzi}>野</span>
              </span>
              <span>
                <span className={style.pinyin}>shuǐ</span>
                <span className={style.hanzi}>水</span>
              </span>
              <span>
                <span className={style.pinyin}>huāng</span>
                <span className={style.hanzi}>荒</span>
              </span>
              <span>
                <span className={style.pinyin}>wān</span>
                <span className={style.hanzi}>湾</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>gǔ</span>
                <span className={style.hanzi}>古</span>
              </span>
              <span>
                <span className={style.pinyin}>shí</span>
                <span className={style.hanzi}>石</span>
              </span>
              <span>
                <span className={style.pinyin}>mái</span>
                <span className={style.hanzi}>埋</span>
              </span>
              <span>
                <span className={style.pinyin}>xiāng</span>
                <span className={style.hanzi}>香</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>jīn</span>
                <span className={style.hanzi}>金</span>
              </span>
              <span>
                <span className={style.pinyin}>shā</span>
                <span className={style.hanzi}>沙</span>
              </span>
              <span>
                <span className={style.pinyin}>suǒ</span>
                <span className={style.hanzi}>锁</span>
              </span>
              <span>
                <span className={style.pinyin}>gǔ</span>
                <span className={style.hanzi}>骨</span>
              </span>
              <span>
                <span className={style.pinyin}>lián</span>
                <span className={style.hanzi}>连</span>
              </span>
              <span>
                <span className={style.pinyin}>huán</span>
                <span className={style.hanzi}>环</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>nán</span>
                <span className={style.hanzi}>南</span>
              </span>
              <span>
                <span className={style.pinyin}>lóu</span>
                <span className={style.hanzi}>楼</span>
              </span>
              <span>
                <span className={style.pinyin}>bú</span>
                <span className={style.hanzi}>不</span>
              </span>
              <span>
                <span className={style.pinyin}>hèn</span>
                <span className={style.hanzi}>恨</span>
              </span>
              <span>
                <span className={style.pinyin}>chuī</span>
                <span className={style.hanzi}>吹</span>
              </span>
              <span>
                <span className={style.pinyin}>héng</span>
                <span className={style.hanzi}>横</span>
              </span>
              <span>
                <span className={style.pinyin}>dí</span>
                <span className={style.hanzi}>笛</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>hèn</span>
                <span className={style.hanzi}>恨</span>
              </span>
              <span>
                <span className={style.pinyin}>xiǎo</span>
                <span className={style.hanzi}>晓</span>
              </span>
              <span>
                <span className={style.pinyin}>fēng</span>
                <span className={style.hanzi}>风</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>、</span>
              </span>
              <span>
                <span className={style.pinyin}>qiān</span>
                <span className={style.hanzi}>千</span>
              </span>
              <span>
                <span className={style.pinyin}>lǐ</span>
                <span className={style.hanzi}>里</span>
              </span>
              <span>
                <span className={style.pinyin}>guān</span>
                <span className={style.hanzi}>关</span>
              </span>
              <span>
                <span className={style.pinyin}>shān</span>
                <span className={style.hanzi}>山</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>bàn</span>
                <span className={style.hanzi}>半</span>
              </span>
              <span>
                <span className={style.pinyin}>piāo</span>
                <span className={style.hanzi}>飘</span>
              </span>
              <span>
                <span className={style.pinyin}>líng</span>
                <span className={style.hanzi}>零</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>tíng</span>
                <span className={style.hanzi}>庭</span>
              </span>
              <span>
                <span className={style.pinyin}>shàng</span>
                <span className={style.hanzi}>上</span>
              </span>
              <span>
                <span className={style.pinyin}>huáng</span>
                <span className={style.hanzi}>黄</span>
              </span>
              <span>
                <span className={style.pinyin}>hūn</span>
                <span className={style.hanzi}>昏</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>yuè</span>
                <span className={style.hanzi}>月</span>
              </span>
              <span>
                <span className={style.pinyin}>lěng</span>
                <span className={style.hanzi}>冷</span>
              </span>
              <span>
                <span className={style.pinyin}>lán</span>
                <span className={style.hanzi}>阑</span>
              </span>
              <span>
                <span className={style.pinyin}>gān</span>
                <span className={style.hanzi}>干</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <br />
              <span>
                <span className={style.pinyin}>shòu</span>
                <span className={style.hanzi}>寿</span>
              </span>
              <span>
                <span className={style.pinyin}>yáng</span>
                <span className={style.hanzi}>阳</span>
              </span>
              <span>
                <span className={style.pinyin}>kōng</span>
                <span className={style.hanzi}>空</span>
              </span>
              <span>
                <span className={style.pinyin}>lǐ</span>
                <span className={style.hanzi}>理</span>
              </span>
              <span>
                <span className={style.pinyin}>chóu</span>
                <span className={style.hanzi}>愁</span>
              </span>
              <span>
                <span className={style.pinyin}>luán</span>
                <span className={style.hanzi}>鸾</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>wèn</span>
                <span className={style.hanzi}>问</span>
              </span>
              <span>
                <span className={style.pinyin}>shuí</span>
                <span className={style.hanzi}>谁</span>
              </span>
              <span>
                <span className={style.pinyin}>tiáo</span>
                <span className={style.hanzi}>调</span>
              </span>
              <span>
                <span className={style.pinyin}>yù</span>
                <span className={style.hanzi}>玉</span>
              </span>
              <span>
                <span className={style.pinyin}>suǐ</span>
                <span className={style.hanzi}>髓</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>àn</span>
                <span className={style.hanzi}>暗</span>
              </span>
              <span>
                <span className={style.pinyin}>bǔ</span>
                <span className={style.hanzi}>补</span>
              </span>
              <span>
                <span className={style.pinyin}>xiāng</span>
                <span className={style.hanzi}>香</span>
              </span>
              <span>
                <span className={style.pinyin}>bān</span>
                <span className={style.hanzi}>瘢</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>xì</span>
                <span className={style.hanzi}>细</span>
              </span>
              <span>
                <span className={style.pinyin}>yǔ</span>
                <span className={style.hanzi}>雨</span>
              </span>
              <span>
                <span className={style.pinyin}>guī</span>
                <span className={style.hanzi}>归</span>
              </span>
              <span>
                <span className={style.pinyin}>hóng</span>
                <span className={style.hanzi}>鸿</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>gū</span>
                <span className={style.hanzi}>孤</span>
              </span>
              <span>
                <span className={style.pinyin}>shān</span>
                <span className={style.hanzi}>山</span>
              </span>
              <span>
                <span className={style.pinyin}>wú</span>
                <span className={style.hanzi}>无</span>
              </span>
              <span>
                <span className={style.pinyin}>xiàn</span>
                <span className={style.hanzi}>限</span>
              </span>
              <span>
                <span className={style.pinyin}>chūn</span>
                <span className={style.hanzi}>春</span>
              </span>
              <span>
                <span className={style.pinyin}>hán</span>
                <span className={style.hanzi}>寒</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>lí</span>
                <span className={style.hanzi}>离</span>
              </span>
              <span>
                <span className={style.pinyin}>hún</span>
                <span className={style.hanzi}>魂</span>
              </span>
              <span>
                <span className={style.pinyin}>nán</span>
                <span className={style.hanzi}>难</span>
              </span>
              <span>
                <span className={style.pinyin}>qìng</span>
                <span className={style.hanzi}>倩</span>
              </span>
              <span>
                <span className={style.pinyin}>zhāo</span>
                <span className={style.hanzi}>招</span>
              </span>
              <span>
                <span className={style.pinyin}>qīng</span>
                <span className={style.hanzi}>清</span>
              </span>
              <span>
                <span className={style.pinyin}>xiē</span>
                <span className={style.hanzi}>些</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>mèng</span>
                <span className={style.hanzi}>梦</span>
              </span>
              <span>
                <span className={style.pinyin}>gǎo</span>
                <span className={style.hanzi}>缟</span>
              </span>
              <span>
                <span className={style.pinyin}>yī</span>
                <span className={style.hanzi}>衣</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>、</span>
              </span>
              <span>
                <span className={style.pinyin}>jiě</span>
                <span className={style.hanzi}>解</span>
              </span>
              <span>
                <span className={style.pinyin}>pèi</span>
                <span className={style.hanzi}>佩</span>
              </span>
              <span>
                <span className={style.pinyin}>xī</span>
                <span className={style.hanzi}>溪</span>
              </span>
              <span>
                <span className={style.pinyin}>biān</span>
                <span className={style.hanzi}>边</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
              <span>
                <span className={style.pinyin}>zuì</span>
                <span className={style.hanzi}>最</span>
              </span>
              <span>
                <span className={style.pinyin}>chóu</span>
                <span className={style.hanzi}>愁</span>
              </span>
              <span>
                <span className={style.pinyin}>rén</span>
                <span className={style.hanzi}>人</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>tí</span>
                <span className={style.hanzi}>啼</span>
              </span>
              <span>
                <span className={style.pinyin}>niǎo</span>
                <span className={style.hanzi}>鸟</span>
              </span>
              <span>
                <span className={style.pinyin}>qīng</span>
                <span className={style.hanzi}>清</span>
              </span>
              <span>
                <span className={style.pinyin}>míng</span>
                <span className={style.hanzi}>明</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>，</span>
              </span>
              <span>
                <span className={style.pinyin}>yè</span>
                <span className={style.hanzi}>叶</span>
              </span>
              <span>
                <span className={style.pinyin}>dǐ</span>
                <span className={style.hanzi}>底</span>
              </span>
              <span>
                <span className={style.pinyin}>qīng</span>
                <span className={style.hanzi}>青</span>
              </span>
              <span>
                <span className={style.pinyin}>yuán</span>
                <span className={style.hanzi}>圆</span>
              </span>
              <span>
                <span className={style.pinyin}></span>
                <span className={style.hanzi}>。</span>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={style.tools}>
        <img
          className={style.toolsIcon}
          src={isCollect ? shouCangOkIcon : shouCangIcon}
          alt=""
          onClick={handleCollect}
        />
        <img className={style.toolsIcon} src="/assets/images/down-load.png" alt="" />
        <img className={style.toolsIcon} src="/assets/images/co-py.png" alt="" onClick={handleCopy} />
        <img className={style.toolsIcon} src="/assets/images/speak-er.png" alt="" />
        <img className={style.toolsIcon} src="/assets/images/tool-more.png" alt="" />
      </div>
      <div className={style.tag}>
        {tags &&
          tags.map((tag, index) => {
            return (
              <a className={style.tagItem} key={index}>
                {tag}
              </a>
            );
          })}
      </div>
      <div className={style.yizhu}>
        <img className={style.yizhuIcon} src={yi ? yiPicOkIcon : yiPicIcon} alt="" onClick={handleYi} />
        <img className={style.yizhuIcon} src={zhu ? zhuPicOkIcon : zhuPicIcon} alt="" onClick={handleZhu} />
        <img className={style.yizhuIcon} src={shang ? shangPicOkIcon : shangPicIcon} alt="" onClick={handleShang} />
        <img className={style.yizhuIcon} src={yin ? yinPicOkIcon : yinPicIcon} alt="" onClick={handleYin} />
        <img className={style.yizhuIcon} src="/assets/images/bei-pic.png" alt="" />
      </div>
    </div>
  );
};
