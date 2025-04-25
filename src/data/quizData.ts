
import type { Quiz } from '@/types/quiz';

export const quizzes: Quiz[] = [
  {
    id: '1',
    articleId: '1',
    questions: [
      {
        id: 'q1-1',
        question: 'What is Pua Kumbu primarily used for in traditional Iban culture?',
        options: [
          'Daily clothing',
          'Ceremonial and ritual purposes',
          'Home decoration',
          'Currency exchange'
        ],
        correctAnswer: 'Ceremonial and ritual purposes',
        translations: {
          zh: {
            question: '在传统伊班文化中，Pua Kumbu主要用于什么？',
            options: [
              '日常服装',
              '仪式和礼仪用途',
              '家居装饰',
              '货币兑换'
            ]
          },
          ms: {
            question: 'Apakah kegunaan utama Pua Kumbu dalam budaya tradisional Iban?',
            options: [
              'Pakaian harian',
              'Tujuan upacara dan ritual',
              'Hiasan rumah',
              'Pertukaran mata wang'
            ]
          }
        }
      },
      {
        id: 'q1-2',
        question: 'Which natural dye is NOT typically used in traditional Pua Kumbu weaving?',
        options: [
          'Indigo',
          'Morinda',
          'Synthetic blue',
          'Engkudu'
        ],
        correctAnswer: 'Synthetic blue',
        translations: {
          zh: {
            question: '在传统的Pua Kumbu编织中通常不使用哪种天然染料？',
            options: [
              '靛蓝',
              '茜草',
              '合成蓝',
              '东南亚茜草'
            ]
          },
          ms: {
            question: 'Pewarna semula jadi manakah yang TIDAK digunakan secara tradisional dalam tenunan Pua Kumbu?',
            options: [
              'Indigo',
              'Morinda',
              'Biru sintetik',
              'Engkudu'
            ]
          }
        }
      },
      {
        id: 'q1-3',
        question: 'How long can it take to complete a complex Pua Kumbu textile?',
        options: [
          'A few days',
          'A few weeks',
          'Several months to years',
          'Only 24 hours'
        ],
        correctAnswer: 'Several months to years',
        translations: {
          zh: {
            question: '完成一个复杂的Pua Kumbu纺织品需要多长时间？',
            options: [
              '几天',
              '几周',
              '数月到数年',
              '仅24小时'
            ]
          },
          ms: {
            question: 'Berapa lama masa yang diperlukan untuk menyiapkan tekstil Pua Kumbu yang kompleks?',
            options: [
              'Beberapa hari',
              'Beberapa minggu',
              'Beberapa bulan hingga tahun',
              'Hanya 24 jam'
            ]
          }
        }
      }
    ]
  },
  {
    id: '2',
    articleId: '2',
    questions: [
      {
        id: 'q2-1',
        question: 'What is the main base for Sarawak Laksa broth?',
        options: [
          'Fish stock and tamarind',
          'Chicken stock and coconut milk',
          'Beef stock and lime juice',
          'Vegetable stock and soy sauce'
        ],
        correctAnswer: 'Chicken stock and coconut milk',
        translations: {
          zh: {
            question: '砂拉越叻沙汤底的主要基础是什么？',
            options: [
              '鱼汤和罗望子',
              '鸡汤和椰奶',
              '牛肉汤和酸橙汁',
              '蔬菜汤和酱油'
            ]
          },
          ms: {
            question: 'Apakah asas utama untuk kuah Laksa Sarawak?',
            options: [
              'Stok ikan dan asam jawa',
              'Stok ayam dan santan',
              'Stok daging dan jus limau',
              'Stok sayuran dan kicap'
            ]
          }
        }
      },
      {
        id: 'q2-2',
        question: 'Which famous food personality described Sarawak Laksa as the "breakfast of the gods"?',
        options: [
          'Gordon Ramsay',
          'Jamie Oliver',
          'Anthony Bourdain',
          'Nigella Lawson'
        ],
        correctAnswer: 'Anthony Bourdain',
        translations: {
          zh: {
            question: '哪位著名的美食人士将砂拉越叻沙描述为"众神的早餐"？',
            options: [
              '戈登·拉姆齐',
              '杰米·奥利弗',
              '安东尼·波登',
              '奈杰拉·劳森'
            ]
          },
          ms: {
            question: 'Personaliti makanan terkenal manakah yang menyifatkan Laksa Sarawak sebagai "sarapan para dewa"?',
            options: [
              'Gordon Ramsay',
              'Jamie Oliver',
              'Anthony Bourdain',
              'Nigella Lawson'
            ]
          }
        }
      },
      {
        id: 'q2-3',
        question: 'What type of noodles are traditionally used in Sarawak Laksa?',
        options: [
          'Egg noodles',
          'Rice vermicelli (bee hoon)',
          'Udon noodles',
          'Soba noodles'
        ],
        correctAnswer: 'Rice vermicelli (bee hoon)',
        translations: {
          zh: {
            question: '砂拉越叻沙传统上使用什么类型的面条？',
            options: [
              '鸡蛋面',
              '米粉',
              '乌冬面',
              '荞麦面'
            ]
          },
          ms: {
            question: 'Apakah jenis mi yang digunakan secara tradisional dalam Laksa Sarawak?',
            options: [
              'Mi telur',
              'Bihun',
              'Mi udon',
              'Mi soba'
            ]
          }
        }
      }
    ]
  }
];

export const getQuizByArticleId = (articleId: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.articleId === articleId);
};
