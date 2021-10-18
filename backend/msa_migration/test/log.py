import os
import logging
import functools

logger = logging.getLogger(os.environ.get('LOGGING_NAME'))
logger.setLevel(os.environ.get('LOGGING_LEVEL', logging.INFO))


def func_wrap(func):
    @functools.wraps(func)
    def wrapper(*func_args, **func_kwargs):
        logger.debug(f'{func.__name__}({repr(func_args)}, {repr(func_kwargs)})')
        ret_val = func(*func_args, **func_kwargs)
        logger.debug(f'{func.__name__}() returns {repr(ret_val)}')
        return ret_val
    return