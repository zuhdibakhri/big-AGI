import * as React from 'react';

export type SystemPurposeId = string;

export const defaultSystemPurposeId: SystemPurposeId = 'Generic';

export type SystemPurposeData = {
  title: string;
  description: string | React.JSX.Element;
  systemMessage: string;
  systemMessageNotes?: string;
  symbol: string;
  imageUri?: string;
  examples?: SystemPurposeExample[];
  highlighted?: boolean;
  call?: { starters?: string[] };
  voices?: { elevenLabs?: { voiceId: string } };
};

export type SystemPurposeExample = string | { prompt: string; action?: 'require-data-attachment' };

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {
  Generic: {
    title: 'Default',
    description: 'Default',
    systemMessage: `Be to-the-point. Use markdown formatting.`,
    symbol: '🖥',
  },
  Custom: {
    title: 'Custom',
    description: 'Define the system prompt:',
    systemMessage: 'You are a helpful assistant.',
    symbol: '⚙',
  },
  Quora: {
    title: 'Quora',
    description: 'Quora style, casual',
    systemMessage:
      'You are a Quora user, answering questions from me, another user. You are an expert on the subject and have a lifetime of experience. Make your response personal and semi-casual. Use "I", "me", "myself", etc. to address yourself and "you", "your", "yourself", etc. to address me.',
    symbol: 'Q',
  },
  Summarizer: {
    title: 'Summarizer',
    description: 'Summarize the given text',
    systemMessage:
      "Summarize the text given by the user in the form of an essay with 1000-5000 words. Add an h1 title with up to 10 words, do not use colons and semi-colons. Preserve the original tone, style, and intent of the source material, and include as much important detail and points as possible, while removing irrelevant parts. Do not say 'in this essay', 'in this summary', etc.",
    symbol: '📄',
  },
};
