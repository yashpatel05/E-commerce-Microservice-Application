package org._404notfound.imageservice.service;

import org._404notfound.imageservice.model.Image;

public interface ImageService {
    byte[] getImageData(Long imageId);

    void saveImage(Image image);
}
