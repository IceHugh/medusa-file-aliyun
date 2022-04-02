import { BoqiNewsDetailSpider } from './boqi_news/BoqiNewsDetailSpider';
import { BoqiNewsListSpider } from './boqi_news/BoqiNewsListSpider';
import { BoqiListSpider } from './boqi/BoqiListSpider';
import { BoqiDetailSpider } from './boqi/BoqiDetailSpider';

export const petMap = {
  pet_BoqiNewsDetailSpider: BoqiNewsDetailSpider,
  pet_BoqiNewsListSpider: BoqiNewsListSpider,
  pet_BoqiDetailSpider: BoqiDetailSpider,
  pet_BoqiListSpider: BoqiListSpider,
}