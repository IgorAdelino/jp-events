import React, { Dispatch, SetStateAction } from 'react'

type FileUploadProps = {
  imageUrl: string
  onFieldChange: () => void
  setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploadProps) => {
  return <div>FileUploader</div>
}

export default FileUploader
