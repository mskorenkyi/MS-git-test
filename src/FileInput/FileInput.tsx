import * as React from 'react';
import { FileInputProps } from './types';
import { FileInputInner } from './FileInputInner';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import { useState } from 'react';

const FileInput: React.FC<FileInputProps<DocumentPickerResponse>> = ({
  onChange,
  accept,
  ...rest
}) => {
  const [
    selectedFile,
    setSelectedFile,
  ] = useState<DocumentPickerResponse>();

  const handlePress = async () => {
    try {
      const name = "1234";
      let type: Array<string> = [DocumentPicker.types.allFiles]
      if (accept) {
        type = accept.map((obj) => DocumentPicker.types[obj]);
      }
      const res: DocumentPickerResponse = await DocumentPicker.pickSingle({
        type,
      });

      setSelectedFile(res);
      onChange(res);
    } catch (err: any) {
      if (!DocumentPicker.isCancel(err)) {
        throw err;
      }
    }
  };

  return (
    <FileInputInner<DocumentPickerResponse>
      handlePress={handlePress}
      selectedFile={selectedFile}
      onChange={onChange}
      {...rest}
    />
  );
};

export default FileInput;
